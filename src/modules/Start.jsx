export default function Start({logIn}){

    let username = "User";

    //Checks for changes in input field
    function handleChange({target}){
        console.log(target.name);
        username = target.value;
        console.log("Username is;", username);
    }

    //Submits the written username and changes submitstate to shop
    function handleSubmit(event){
        event.preventDefault;
        logIn(username);
    }

    return (
        <form id="start">
            <h4>Log In</h4>
            <input onChange={handleChange} placeholder="Username"></input>
            <p></p>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )

}