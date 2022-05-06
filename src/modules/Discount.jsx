import { useState } from "react";

export default function Discount({discountWeight, price, setNewPrice}){

    let discountPercent = 0;//Used for calculating price after discount
    let percentText = "";

    if (discountWeight < 0.3){
        discountPercent = 0.90;
        percentText = "10%";
    }
    else if (discountWeight >= 0.3 && discountWeight < 0.7){
        discountPercent = 0.80;
        percentText = "20%";
    }
    else if (discountWeight >= 0.7 && discountWeight < 0.9){
        discountPercent = 0.70;
        percentText = "30%";
    }
    else if (discountWeight >= 0.9){
        discountPercent = 0.50;
        percentText = "50%";
    }

    const [salePrice, setSalePrice] = useState(price * discountPercent);
    const [saleRendered, setSaleRendered] = useState(false);

    if (!saleRendered){
        setSalePrice(Number.parseFloat(salePrice).toFixed(2));

        setSaleRendered(true);
        setNewPrice(Number.parseFloat(salePrice).toFixed(2));
    }

    
    let salePriceText = salePrice + "$" + "  " + percentText;

    return (
        <>
            <h4 style={{textDecoration: "line-through"}}>{price}$</h4>
            <p style={{color: "red"}}> {salePriceText}</p>
        </>
    )

}