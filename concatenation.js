let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2024 - birthYear; // update to 2024, if necessary
    // 1. Declare a variable to save the value of the city the user is from.
    let city = document.querySelector(".city").value;
    // 2. Below write your sentences! 
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.
    if (age > 122) {
        document.querySelector(".results").innerHTML ="Not a valid birth year.";
    } else {
    let arrest;
    if (age >= 18){
        arrest = "I might be legally liable, at " + age + ", but who's gonna stop me? 🤪. ";
    } else {
        arrest = "They can't legally arrest me, because I'm only " + age +", so we gonna go hard! 🔥. ";
    };
    document.querySelector(".results").innerHTML = "What's up my giggity ganstars? I'm DJ Lil' " + myName + ", and I'm feeling so " +mood+" rn. Today, we're gonna blow up the " +food+" factory, located in "+city+"!!!! " + arrest + " Let's get into this epic video!"
};

});