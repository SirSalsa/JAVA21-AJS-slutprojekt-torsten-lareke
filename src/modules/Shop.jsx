import Product from "./Product";
import { useState } from "react";

//Image urls for shop items
const wDuck_url = new URL('../images/white_duck.jpg', import.meta.url);
const cGoose_url = new URL('../images/canada_goose.jpg', import.meta.url);
const gGoose_url = new URL('../images/greylag_goose.jpg', import.meta.url);
const mallard_url = new URL('../images/mallard.jpeg', import.meta.url);
const mDuck_url = new URL('../images/muscovy_duck.jpg', import.meta.url);
const sGoose_url = new URL('../images/snow_goose.jpg', import.meta.url);

export default function Shop({username, logOut, checkOut}){

    const [products, setProducts] = useState([]);
    
    //Adds a newly created object to array(products)
    function updateProducts(newObject){
        const newArr = [...products];

        let addDuck = true;//Boolean to check if an object has been added to array, to prevent repeating code in a loop

        if (newArr.length >= 1) {
            newArr.forEach(function (item) {
                //console.log(item.name, newObject.name)
                if (item.name === newObject.name){
                    console.log("Object already exists, replaced it");
                    item.amount = newObject.amount;//Replaces amount for existing object
                    addDuck = false;
                }
            });
        }
        if(addDuck) newArr.push(newObject);//If there are no objects in array, adds the newest one immediately

        console.log('in updateProducts 2', newArr);
        setProducts(newArr);
    }

    //Logout button
    function handleSubmit(event){
        event.preventDefault;
        logOut();
    }

    //Go to Cart Button
    function submitToCart(event){
        event.preventDefault;
        checkOut(products);//Sets product array to the same as products
    }

    return (

        <div id="shop">
            <header>Logged in as {username}.</header>
            <p></p>
            <h2>Webshop</h2>
            <main>
                <Product updateProducts={updateProducts} title="White Duck" price="9.98" imgUrl={wDuck_url}/>
                <Product updateProducts={updateProducts} title="Canada Goose" price="14.56" imgUrl={cGoose_url}/>
                <Product updateProducts={updateProducts} title="Greylag Goose" price="12.09" imgUrl={gGoose_url}/>
                <Product updateProducts={updateProducts} title="Mallard" price="7.76" imgUrl={mallard_url}/>
                <Product updateProducts={updateProducts} title="Muscovy Duck" price="17.42" imgUrl={mDuck_url}/>
                <Product updateProducts={updateProducts} title="Snow Goose" price="22.09" imgUrl={sGoose_url}/>
            </main>
            <footer>
                <button onClick={submitToCart}>Items in Cart: {products.length}</button>
                <p></p>
                <button onClick={handleSubmit}>Sign Out</button>
            </footer>
        </div>
        
    )
}