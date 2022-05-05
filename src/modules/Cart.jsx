export default function Cart({username, logOut, productList}){

    let productAmount = productList.length;

    let sum = 0;//Number for displaying data on page render
    let temp = 0;//Number for handling raw data

    productList.forEach(function (item){//Loops through all objects to calculate the sum
        temp += item.price * item.amount;
    });
    
    sum = Number.parseFloat(temp).toFixed(2);//Makes the resulting number always contain 2 decimals

    //Logout button
    function handleSubmit(event){
        event.preventDefault;
        logOut();
    }

    //"Pay" button
    function buyItems(event){
        event.preventDefault;
        alert("Success! Your purchased item(s) have been ordered. " + sum + "$ have been deducted from your account.");
        logOut();
    }

    return (

        <div id="cart">
            <header>Logged in as {username}.</header>
            <p></p>
            <h2>Checkout</h2>
            <main>
                <h4>Items in Cart: {productAmount}</h4>
                <h4>The sum from your added products is {sum}$.</h4>
                <button id="checkout" onClick={buyItems}>Buy Items</button>
                <p></p>
            </main>
            <footer>
                <p></p>
                <button onClick={handleSubmit}>Sign Out</button>
            </footer>
        </div>
    )

}