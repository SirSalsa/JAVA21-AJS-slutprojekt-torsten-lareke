import { useState } from "react";

export default function Product({updateProducts, title, price, imgUrl}){

    //Randomizes to possibly make item on sale
    let saleWeight = Math.random();
    let discountWeight = Math.random();
    let discountPercent;
    let discountPrice = 0;
    let percentText;
    if (saleWeight > 0.1){
        if (discountWeight > 0.3 && discountWeight < 0.5){
            discountPercent = 0.90;
            percentText = "10%";
        }
        else if (discountWeight > 0.5 && discountWeight < 0.7){
            discountPercent = 0.80;
            percentText = "20%";
        }
        else if (discountWeight > 0.7){
            discountPercent = 0.70;
            percentText = "30%";
        }
        discountPrice = (price * discountPercent);
    }

    let priceText = price + "$";
    let salePriceText = "";
    let newPrice = price;

    let priceStyle = "none";
    let saleStyle = "red";

    if (discountPrice > 0){//Only shows if there is a sale on item
        priceStyle = "line-through";
        newPrice = Number.parseFloat(discountPrice).toFixed(2);
        salePriceText = newPrice + "$" + "  " + percentText + " OFF!";
    }

    const [newObj, setNewObj] = useState({
        name: title,
        price: newPrice,
        amount: 0
    });

    //Detect changes typed in input box (for name)
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
            <h4 style={{textDecoration: priceStyle}}>{priceText}</h4>
            <p style={{color: saleStyle}}> {salePriceText}</p>
            
            <input onChange={handleChange} name="amount" type="number" placeholder="Amount"></input>
            <button onClick={handleSubmit}>Add to Cart</button>
            <p></p>
        </article>
    )

}