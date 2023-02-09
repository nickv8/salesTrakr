// use customers;
import { customerDb, db } from "../src/customerDb";

// C2bcWgGoEwHbQHapmCGCnfcrjMNkTlBX2fuqUXfXiiQwVNSgYW570YWAaVSYCVbR api key

customerDb.dropDatabase();

db.customers.insertMany([
  {
    name: "Test Customer",
    address: "456 ABC Street, Not Here, Sl 00012",
    phone_number: "123-456-7890",
    contact_name: "Someone",
    contact_email: "someone@web.com",
  },
  {
    name: "Test Customer2",
    address: "1234 Other Street, Ocean View, NJ, 08230",
    phone_number: "012-345-6789",
    contact_name: "Otherguy",
    contact_email: "otherguy@web.com",
  },
]);
