# Capstone Project - Part 4
## First Steps:
To begin the Capstone Part 4 - Astrology Picture of the Day Search assignment, I signed up for my own personal NASA APOD API. In doing so, it will allow me to use the Fetch API for asynchronous operations, without the need for other object methods. Once I signed up, I received my personal API Key which I can use to begin to test using the Fetch API. To wrap my head around beginning this phase of the project, I did some research on how to use an asynchronous operation with the NASA API. I came across a video that demonstrated how to use the NASA API to create, and test the API using JavaScript, which I have referenced in my list below.
## Programming Challenges:
After testing the API, I struggled to figure out how to display the content in the correct section of my application. A video tutorial showed me how to acheive this using the data found in the API to display on the sections of my pages using the DOM, which I have referenced below. I ran into an issue with allowing the user to select the date, to display the image from the date that they choose. After many attemps, this issue was resolved by help from David. David taught me how to expressions "${}" to allow the user to select the data via calling the API response with the await/fetch.

After getting the prseArray working, with driving data from the API, I struggled to save the images to favourites. I used the addEventListener on the favourites button, to push and pop the image and title into the favourites section, however, I came to realise that this gave me the same result as the date/image I chose, so saving the data to favourites would only be a copy of the data from the image that was generated.

I experimented with creating new arrays specifically for images/titles added to the favourites section. I then recorded any time the user clicked on the favourites button and printed out a console.log of the title and url of what image/title the user wanted to save to favourites, and to local storage. The data was saved to local storage and the new arrays, however, I could not figure out how to get the image/title to appear in the favourites section.

In conclusion, if time permitted, I would come back to this to continue to try and complete this assignment in its entirety. I would try to display the image/title in the favourites section, and allow the user to click the left and right buttons to navigate through the new arrays for holding the data the user saved to favourites, as well as being able for the user to delete any saved images from the localStorage and the favourites section, respectively. During my co-op semester, I would like to spend some more quality time with JavaScript programming, through attending a bootcamp, or simply using websites like scrimba, and freecodecamp to practice and learn for the next semester.

David, thank you for all of your help and consideration throught the entirety of this course. I hope by practicing more, I will become more versed in the art of programming.

You can find a list of resouces & references I used to complete this assignment below:

## References/Resources:
* [Nasa API Tutorial via Async Request](https://youtu.be/hk1ohonv4mk)
* [How to Use NASA APIs](https://wilsjame.github.io/how-to-nasa/)
* [JS Fetch API using NASA APOD API](https://sophiali.dev/javascript-fetch-api-with-nasa-api)
* [JavaScript Array of Objects Tutorial](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)
* [Total Length of Array](https://stackoverflow.com/questions/36973547/subtract-and-get-a-clean-number-from-the-total-length-of-the-array-javascript)
* [Modzilla - Pop Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
* [Local Storage](https://imdac.github.io/modules/js/js-localstorage/)
* [Arrays - IMDAC](https://imdac.github.io/modules/js/js-arrays/)
* [Array Manipulation - IMDAC](https://imdac.github.io/modules/js/js-arrays/array-manipulation.html)