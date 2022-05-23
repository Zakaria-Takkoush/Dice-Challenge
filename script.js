window.onload = function () {

// create 2 random variables between 1 and 6    
    var rand1 = Math.floor(Math.random() * 6) + 1;      // added 1 to start from 1 and neglect 0
    var rand2 = Math.floor(Math.random() * 6) + 1;

// Get image objects
    var dice1 = document.getElementsByClassName("img1")[0]
    var dice2 = document.getElementsByClassName("img2")[0]

// Display images based on random numbers
    dice1.setAttribute("src", "images/dice" + rand1 + ".png")
    dice2.setAttribute("src", "images/dice" + rand2 + ".png")

}

