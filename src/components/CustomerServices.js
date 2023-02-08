const CustomerServices = {

    async create(customer) {
        const res = await fetch(`http://localhost:8000/customers`, {
      method: "POST",
      body: JSON.stringify(customer),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return console.log(data);
      },

    delete (customerId) {
        return fetch(`http://localhost:8000/customers/${customerId}`, {
            method: 'DELETE'
        }) 
    },
};
export default CustomerServices
