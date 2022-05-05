import { useState } from "react";
import ReactDOM from "react-dom/client";
import Start from "./modules/Start";
import Shop from "./modules/Shop";
import Cart from "./modules/Cart";

function App(){

    const [submitState, setSubmitState] = useState("start");
    const [username, setUserName] = useState("Username");
    const [productList, setProductList] = useState([]);

    //Changes the submitstate which changes rendered page when logging on
    function logIn(newUsername){
        setUserName(newUsername);
        setSubmitState("shop");
    }

    //Logout button
    function logOut(){
        setSubmitState("start");
    }

    //Checkout button in store, saves and sends list of added items to cart
    function checkOut(productList){
        setProductList(productList);
        setSubmitState("cart");
    }

    return (
        <div id="core">
            {submitState == "start" && <Start logIn={logIn}/>}
            {submitState == "shop" && <Shop username={username} logOut={logOut} checkOut={checkOut}/>}
            {submitState == "cart" && <Cart username={username} logOut={logOut} productList={productList}/>}
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);