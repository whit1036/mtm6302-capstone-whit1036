// creates a variable to target the date picker
const $chooseDate = document.getElementById('datePicker')

// creates a variable to target the generate button
const $generateButton = document.getElementById('generate-btn')

// uses the addEventListener method to create a click function to the generate button
$generateButton.addEventListener('click', ()=>{
    console.log('button pressed')
    sendApiRequest($chooseDate.value)
})

// // retrives array, uses parse method to get object data back
const lclstrg = localStorage.getItem('array')
let parseArray = []
if (lclstrg) {
    let parseArray = JSON.parse(lclstrg)
}

// uses for loop to loop through api object array
for (let i = 0; i < parseArray.length; i++) {
    const apodimgData = parseArray[i]
    console.log(apodimgData)
}

// creates an async function to test, and fetch data from the NASA APOD API
async function sendApiRequest(date){
    let API_KEY = "rBrWOtPUsRcCbdwGdfUbAEbX9h7vDWIHdeyeOmOZ"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useAPIData(data)

    // uses the addEventListener method and if statement to create a click function to the save images to local storage
    const $favsimgButton = document.getElementById('favsimgSave')
    if ($favsimgButton) {
        $favsimgButton.addEventListener('click', ()=>{
            console.log('button pressed')
            parseArray.push(data)
            const jsonArray = JSON.stringify(parseArray)
            localStorage.setItem('array', jsonArray)
            // creates a variable to return the previous element of the array using the pop method, saves to local storage
            const favimgObj = parseArray.pop()
            document.getElementById('favs-img-color').innerHTML = `<img src="${favimgObj.url}" class="img-fluid" alt="Collection of your favourite Images/Videos">`
            document.getElementById('favsimgTitle').innerHTML = favimgObj.title
            localStorage.setItem('favimgObj', JSON.stringify(favimgObj))
        })
    }

    // uses the addEventListener method and if statement to create a click funtion that displays the next image saved
    const $rightBtn = document.getElementById('right-btn')
    if ($rightBtn) {
        $rightBtn.addEventListener('click', ()=>{
            console.log('button pressed')
            parseArray.push(data)
            const jsonArray = JSON.stringify(parseArray)
            localStorage.setItem('array', jsonArray)
            // creates a variable to return the previous element of the array using the pop method, saves to local storage
            const favimgObj = parseArray.pop()
            document.getElementById('favs-img-color').innerHTML = `<img src="${favimgObj.url}" class="img-fluid" alt="Collection of your favourite Images/Videos">`
            document.getElementById('favsimgTitle').innerHTML = favimgObj.title
            localStorage.setItem('favimgObj', JSON.stringify(favimgObj))
        })
    }

    // used the addEventListener method and if statement to create a click function that displays the last image saved
    const $leftBtn = document.getElementById('left-btn')
    if ($leftBtn) {
        $leftBtn.addEventListener('click', ()=>{
            console.log('button pressed')
            parseArray.pop()
            const jsonArray = JSON.stringify(parseArray)
            localStorage.setItem('array', jsonArray)
            // creates a variable to return the previous element of the array using the pop method, saves to local storage
            const favimgObj = parseArray.push()
            document.getElementById('favs-img-color').innerHTML = `<img src="${favimgObj.url}" class="img-fluid" alt="Collection of your favourite Images/Videos">`
            document.getElementById('favsimgTitle').innerHTML = favimgObj.title
            localStorage.setItem('favimgObj', JSON.stringify(favimgObj))
        })
    }

    // uses the addEventListener method and if statement to create a click function that deleted the image from local storage
    const $trashBtn = document.getElementById('trash-btn')
    if ($trashBtn) {
        $trashBtn.addEventListener('click', ()=>{
            console.log('button pressed')
        })
    }
}

// Call the API with no date value to display today's picture
sendApiRequest('')

// creates a function to use the data found in the API to dynamically insert API data
function useAPIData(data) {
    document.getElementById('exData').innerHTML = data.explanation
    document.getElementById('dateData').innerHTML = data.date
    document.getElementById('nameData').innerHTML = data.title
    document.getElementById('modalnameData').innerHTML = data.title
    document.getElementById('imgData').innerHTML = `<img src="${data.url}" class="w-75" alt="Small Generated Image/Video">`
    document.getElementById('hdimgData').innerHTML = `<img src="${data.hdurl}" class="w-100" alt="Large Generated Image/Video">`
}