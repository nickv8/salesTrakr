const CustomerServices = {

    create(customer) {
        return fetch(`http://localhost:8000/addcustomer/`, {
          method: "POST",
          body: JSON.stringify(customer),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      },

    delete (customerId) {
        return fetch(`http://localhost:8000/customers/${customerId}`, {
            method: 'DELETE'
        }) 
    },
};
export default CustomerServices
