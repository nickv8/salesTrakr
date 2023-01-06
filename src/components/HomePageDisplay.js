import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function HomePageDisplay() {

    return (
        <>
            <h1>Welcome to Sales Trakr</h1>
            <Link to="/Login">
                <Button variant="success">Login</Button>*/
            {""}
          </Link>
            <img
                alt="sales"
                src="https://www.be-terna.com/steam/dynamic/W1siZmYiLCIvaG9tZS9yYWlscy9jbXMvcHVibGljL3NpdGVzLzVlYmZjMzllMjMyZmI5MDZhM2RmYzM0Yi9jb250ZW50X2VudHJ5NWVjMWEzMjUyMzJmYjkwNmEzZGZjMzdjLzVlZGFjMjFlMjMyZmI5MThhZjJhMzQ1ZS9maWxlcy9NaWNyb3NvZnRfRHluYW1pY3NfMzY1X1NhbGVzX3RvcF81X2JlbmVmaXRzX2VuLmpwZWciXSxbInAiLCJ0aHVtYiIsIjExNzB4MTE3MD4iXV0/d177a879eb22a25d/Microsoft_Dynamics_365_Sales_top_5_benefits_en.jpeg"
            />
        
        </>

    );
}

export default HomePageDisplay;