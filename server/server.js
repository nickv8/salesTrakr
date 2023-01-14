import express from "express";
import { customerDb, connectToDb } from "./customerDb.js";
import { ObjectId } from "mongodb";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

//display all customers
app.get("/customer", (req, res) => {
    customerDb.collection("customers")
        .find()
        .toArray()
        .then((documents) => res.send(documents));
});

//add customer
app.post("/addcustomer", (req, res) => {
    let newCustomer = {
        name: req.body.name,
        address: req.body.address,
        state: req.body.state,
        zipCode: req.body.zipCode,
        phoneNumber: req.body.phonenumber,
        contactName: req.body.contactname,
        contactEmail: req.body.contactemail
    };
    console.log(newCustomer);
    customerDb.collection("customers").insertOne(newCustomer);
    res.json({ res: "Success" });

});

//delete customer
app.delete("/customer/:id", async (req, res) => {
    const { id } = req.params;
    const customer = await customerDb
        .collection("customers")
        .deleteOne({ _id: ObjectId(id) });
    customer ? res.json(customer) : res.status(404);
})

//search all customers
app.get("/search", (req, res) => {
    customerDb.collection("customers")
        .find({
            $or: [
                {
                    name: { $regex: `.*${req.query.searchTerm}`, $options: "i" }
                },
                {
                    state: { $regex: `.*${req.query.searchTerm}`, $options: "i" }
                },
                {
                    contactName: { $regex: `.*${req.query.searchTerm}`, $options: "i" }
                },
                {
                    phoneNumber: { regex: `.*${req.query.searchTerm}`, $options: "i" }
                },
                {
                    contactEmail: { regex: `.*${req.query.searchTerm}`, $options: "i" }
                },
            ]
        })
        .toArray()
        .then((documents) => {
            console.log(documents);
            res.send(documents);
        });
});

//connect to database
connectToDb(() => {
    app.listen(8000, () => {
      console.log("Server listening on 8000"); //this is our backend server
    });
  });