import express from "express";
import { customerDb, connectToDb } from "./customerDb.js";
import { ObjectId } from "mongodb";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

//display all customers
app.get("/customers", (req, res) => {
    customerDb.collection("customers")
        .find()
        .toArray()
        .then((documents) => res.send(documents));
});

//add customer
app.post("/customers", (req, res) => {
    let newCustomer = {
        name: req.body.name,
        address: req.body.address,
        phone_number: req.body.phoneNumber,
        contact_name: req.body.contactName,
        contact_email: req.body.contactEmail
    };
    console.log(newCustomer);
    customerDb.collection("customers").insertOne(newCustomer);
    res.json({ res: "Success" });

});

//display customer details
app.get("/customers/:id", async (req, res) => {
    const { id } = req.params;
    const customer = await customerDb.collection("customers").findOne({ _id: ObjectId(id) });
    customer ? res.json(customer) : res.status(404);
  });

//delete customer
app.delete("/customers/:id", async (req, res) => {
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
                    address: { $regex: `.*${req.query.searchTerm}`, $options: "i" }
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