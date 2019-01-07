
//Will display the first item in all slide shows
function setSlides() {
    //Gets the array of pictures for the featured slideshow
    var pictures = document.getElementsByClassName("slideshowPic");

    //Gets the captions for the slide show pictures
    var sideTitles = document.getElementsByClassName("sideTitles");
    var featuredTitles = document.getElementsByClassName("featuredTitles");

    //Only display the first things on the slide shows
    for (var x = 0; x < pictures.length; x++) {
        if (x == 0) {
            pictures[x].style.display = "inline-block";
            featuredTitles[x].style.display = "inline";
        } else {
            pictures[x].style.display = "none";
            featuredTitles[x].style.display = "none"
        }
    }

    //Only display the first things on the slide shows
    for (var x = 0; x < sideTitles.length; x++) {
        if (x == 0) {
            sideTitles[x].style.display = "inline";
        } else if (x == 3) {
            sideTitles[x].style.display = "inline";
        } else {
            sideTitles[x].style.display = "none";
        }
    }

    //Gets the array of pictures for the popular slideshow
    var pictures = document.getElementsByClassName("popularSlideshowPic");
    for (var x = 0; x < pictures.length; x++) {
        if (x == 0) {
            pictures[x].style.display = "inline-block";
        } else {
            pictures[x].style.display = "none";
        }
    }

    //Gets the array of pictures for the new slideshow
    var pictures = document.getElementsByClassName("newSlideshowPic");
    for (var x = 0; x < pictures.length; x++) {
        if (x == 0) {
            pictures[x].style.display = "inline-block";
        } else {
            pictures[x].style.display = "none";
        }
    }
}

//Will change the slide show picture dending on which one it is
//@param className: the slideshow's class
function changeSlides(className) {
    //Gets the array of pictures for the featured slideshow
    var pictures = document.getElementsByClassName(className);
    var titles;

    //Get which page its on
    if (className == "slideshowPic") {
        titles = document.getElementsByClassName("featuredTitles");
    } else if (className == "newSlideshowPic") {
        titles = document.getElementsByClassName("newTitles");
    } else if (className == "popularSlideshowPic") {
        titles = document.getElementsByClassName("popularTitles");
    }


    //Loop through the items and switch the one being displayed to the next one
    for (var x = 0; x < pictures.length; x++) {
        //If its being displayed
        if (pictures[x].style.display == "inline-block") {
            //Don't display it
            pictures[x].style.display = "none";
            titles[x].style.display = "none";

            //Display the next item
            if (x == pictures.length - 1) {
                pictures[0].style.display = "inline-block";
                titles[0].style.display = "inline";
            } else {
                pictures[x + 1].style.display = "inline-block";
                titles[x + 1].style.display = "inline";
            }
            //Exit the loop
            x = pictures.length;
        }
    }
}


//Will take in user input from the contact form
//and determine whether the info is good or not
function SubmitInfo() {
    var emailGood = false;
    var nameGood = false;
    var phoneGood = false;
    var messageGood = false;
    //Allowed numbers
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //Get the email they entered
    var email = document.getElementById("emailInput").value;
    var index = email.indexOf("@");
    var indexDot = email.indexOf(".");
    email = email.substring(index);
    //Get the phone number they entered
    var phone = document.getElementById("phoneInput").value;
    var ammountOfDashes = 0;
    var amountOfNumbers = 0;

    //Allowed emails
    var endings = ["@gmail.com", "@outlook.com", "@yahoo.com", "@sympatico.com", "@rogers.com", "@dal.ca","@hotmail.com","@msn.com"];
    //Check to see if the given email is valid
    for (var x = 0; x < endings.length; x++) {
        if (email == endings[x]) {
        	if(indexDot > index){
            	emailGood = true;
        	}
        }
    }


    //Checks to see if they inputted a name
    if (document.getElementById("nameInput").value != "") {
        nameGood = true;
    }

    //Checks to see if phone number is valid
    if (phone.charAt(3) == "-" && phone.charAt(7) == "-" && phone.length == 12) {
        
        //Checks each character the user inputted
        for (var x = 0; x < phone.length; x++) {
            var check = phone.charAt(x);
            if (x != 3 || x != 7) {
            	//Checks if its an actual number
                for (var i = 0; i < numbers.length; i++) {
                    if (check == numbers[i]) {
                        amountOfNumbers++;
                        i = numbers.length;
                    }
                }
            }
        }
        if (amountOfNumbers == 10) {
            phoneGood = true;
        }
    }

    var messageArea = document.getElementById("messageInput").value;

    //Checks to see if the user entered in a message
    if (messageArea.length > 0) {
        messageGood = true;
    }

    //If email,name, and phone numebr is valid
    if (emailGood == true && nameGood == true && phoneGood == true) {
        window.alert("Message Submitted");
        //Clear the text from the input boxes
        this.Reset();
    }
    //If email is invalid
    else {
        //If the email or name is invalid
        if (emailGood == false && nameGood == true) {
            window.alert("Please input a valid email address");
            //Will only clear the email
            document.getElementById("emailInput").value = "";
        } else if (emailGood == true && nameGood == false) {
            window.alert("Please input a name");
        } else {
            window.alert("Please input a valid email address and name");
            //Will only clear the email
            document.getElementById("emailInput").value = "";
        }

        //If the phone number is invalid
        if (phoneGood == false) {
            window.alert("Please input a valid phone number");
            //Will only clear the email
            document.getElementById("phoneInput").value = "";
        }

        //If a message has been inputted
        if (messageGood == false) {
            window.alert("Please input a valid message");
            //Will only clear the email
            document.getElementById("messageInput").value = "";
        }
    }
}

//Clears all of the text boxes on the contacts page
function Reset() {
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("phoneInput").value = "";
    document.getElementById("messageInput").value = "";
}

//If its on the blog page it'll jump to the part of the page that the article is on
//If its on any other page it will remove the main content on the screen and
//display the article
function jumpToArticle(id) {

	//Gets what page it is
    var title = document.getElementById("id").innerHTML;

    //Make home page stuff disappear
    if (title == "Home Page") {
        var disappear = document.getElementsByClassName("slideshowSection");
        for (var x = 0; x < disappear.length; x++) {
            disappear[x].style.display = "none";
        }
        disappear = document.getElementsByClassName("homeArticleSection");
        for (var x = 0; x < disappear.length; x++) {
            disappear[x].style.display = "none";
        }
    }
    //Make about page stuff disappear
    if (title == "About Page") {
        var disappear = document.getElementsByClassName("aboutSection");
        for (var x = 0; x < disappear.length; x++) {
            disappear[x].style.display = "none";
        }
        disappear = document.getElementsByClassName("howWeStartedSection");
        for (var x = 0; x < disappear.length; x++) {
            disappear[x].style.display = "none";
        }
        document.getElementById("aboutFacePic").style.display = "none";
    }
    //Make contact page stuff disappear
    if (title == "Contacts Page") {
        var disappear = document.getElementById("form");
       
            disappear.style.display = "none";
        
        disappear = document.getElementsByClassName("contactInfo");
        for (var x = 0; x < disappear.length; x++) {
            disappear[x].style.display = "none";
        }
    }
    //Display the article on the page if its not on the contact page
    if (title == "About Page" || title == "Home Page" || title == "Contacts Page") {
        var info = JSON.parse(blogDataMultipleAuthors);
        var everything = "";

        //Get the article
        for (var x = 0; x < info.length; x++) {
            if (info[x].PostID == id) {
                everything += "<h2 id='" + info[x].PostID + "'' class='blogHeaders'>" + info[x].PostTitle + "</h2> <h3 class='blogDates'>" + info[x].PostAuthor + " : " + info[x].PostDate + "</h3> <p class='blogArticles'>" + info[x].PostDetail + "</p>";
                x = info.length;
            }
        }

        //Display it onto the screen
        document.getElementById("articleInfo").innerHTML = everything;
        document.getElementById("articleInfo").style.display = "inline";
    }
    //Move to the correct part of the page the article is on
    else {
        document.getElementById(id).scrollIntoView(true);
    }
}


//Gets the article info from the JSON file and puts it onto the blog
function getBlogData() {

    //Get what page it is
    var title = document.getElementById("id").innerHTML;

    //If its on the blog page
    if (title == "Blog Page") {
        var info = JSON.parse(blogDataMultipleAuthors);
        var length = info.length;
        var everything = "";

        //Get all of the articles
        for (var x = 0; x < length; x++) {
            everything += "<h2 id='" + info[x].PostID + "'' class='blogHeaders'>" + info[x].PostTitle + "</h2> <h3 class='blogDates'>" + info[x].PostAuthor + " : " + info[x].PostDate + "</h3> <p class='blogArticles'>" + info[x].PostDetail + "</p>";
        }

        document.getElementById("blogMainSection").innerHTML = everything;
    }
}