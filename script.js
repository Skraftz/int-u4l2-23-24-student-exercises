let ButtonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");
let ButtonTwo = document.querySelector(".button-two");
let captionTwo = document.querySelector(".caption-two");


ButtonOne.addEventListener("click", function() {
    let spidyCaption = document.querySelector(".comment-one");
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".

    captionOne.innerHTML = spidyCaption.value;
    // 2. Display the variable spidyCaption to captionOne.


});

ButtonTwo.addEventListener("click", function() {
    let spidyCaption = document.querySelector(".comment-two");
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-Two".

    captionTwo.innerHTML = spidyCaption.value;
    // 2. Display the variable spidyCaption to captionTwo.
    

});
// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the Button and caption.