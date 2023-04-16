// creates a variable to target the date picker
const $chooseDate = document.getElementById('datePicker')

// creates a variable to target the generate button
const $generateButton = document.getElementById('generate-btn')

// uses the addEventListener method to create a click function to the generate button
$generateButton.addEventListener('click', ()=>{
    console.log('button pressed')
    sendApiRequest($chooseDate.value)
})

// // retrives array, uses parse method to get object data back from the api
const getobjData = localStorage.getItem('array')
const prseArray = []
if (getobjData) {
    let prseArray = JSON.parse(getobjData)
}

// uses for loop to loop through api object array
for (let i = 0; i < prseArray.length; i++) {
    const nasaimgData = prseArray[i]
    console.log(nasaimgData)
}

// creates an async function to fetch data from the NASA APOD API
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
            prseArray.push(data)
            const jsonArray = JSON.stringify(prseArray)
            localStorage.setItem('array', jsonArray)
            // creates a variable to return the previous element of the array using the pop method, saves to local storage
            const favimgObj = prseArray.pop()
            document.getElementById('favs-img-color').innerHTML = `<img src="${favimgObj.url}" class="img-fluid" alt="Collection of your favourite Images/Videos">`
            document.getElementById('favsimgTitle').innerHTML = favimgObj.title
            localStorage.setItem('favimgObj', JSON.stringify(favimgObj))
        })
    }

    // const $rightBtn = document.getElementById('right-btn')
    // if ($rightBtn) {
    //     $rightBtn.addEventListener('click', ()=>{
    //         console.log('button pressed')
    //     })
    // }

    // const $leftBtn = document.getElementById('left-btn')
    // if ($leftBtn) {
    //     $leftBtn.addEventListener('click', ()=>{
    //         console.log('button pressed')
    //     })
    // }

    // const $trashBtn = document.getElementById('trash-btn')
    // if ($trashBtn) {
    //     $trashBtn.addEventListener('click', ()=>{
    //         console.log('button pressed')
    //     })
    // }
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