import { useState } from "react";
import Discount from "./Discount";
import NoDiscount from "./NoDiscount";

export default function Product({updateProducts, title, price, imgUrl}){

    //Randomizes to possibly make item on sale
    const [saleWeight, setSaleWeight] = useState(Math.random());
    const [discountWeight, setDiscountWeight] = useState(Math.random());
    // const [newPrice, setNewPrice] = useState(price);


    const [newObj, setNewObj] = useState({
        name: title,
        price: price,
        amount: 0
    });

    function updatePrice(newPrice){
        setNewObj({...newObj, price: newPrice})
    }

    //Detect changes typed in input box (for amount)
    function handleChange({target}){
        setNewObj({...newObj,
            [target.name]: target.value
        });
    }

    //Adding item to order
    function handleSubmit(event){
        event.preventDefault;
        //Only adds product if it has atleast 1 in amount
        if (newObj.amount > 0){
            updateProducts(newObj);
        }
    }

    return (
        <article>
            <img src={imgUrl} width="250px"></img>
            <h3>{title}</h3>
            
            {saleWeight <= 0.4 && <NoDiscount price={price}/>}
            {saleWeight > 0.4 && <Discount discountWeight={discountWeight} price={price} setNewPrice={updatePrice}/>}
            
            <input onChange={handleChange} name="amount" type="number" placeholder="Amount"></input>
            <button onClick={handleSubmit}>Add to Cart</button>
            <p></p>
        </article>
    )

}