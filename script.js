
// creates a variable to target the generate button
const $generateButton = document.getElementById('generate-btn')

// uses the addEventListener method to create a click function to the generate button
$generateButton.addEventListener('click', ()=>{
    console.log('button pressed')
    sendApiRequest()
})

// creates an async function to test, and fetch data from the NASA APOD API
async function sendApiRequest(){
    let API_KEY = "rBrWOtPUsRcCbdwGdfUbAEbX9h7vDWIHdeyeOmOZ"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useAPIData(data)
}

// creates a function to use the data found in the API to dynamically insert API data
function useAPIData(data) {
    document.getElementById('exData').innerHTML += data.explanation
    document.getElementById('dateData').innerHTML += data.date
    document.getElementById('nameData').innerHTML += data.title
    document.getElementById('modalnameData').innerHTML += data.title
    document.getElementById('imgData').innerHTML += `<img src="${data.url}" class="w-75" alt="Small Generated Image/Video">`
    document.getElementById('hdimgData').innerHTML += `<img src="${data.hdurl}" class="w-100" alt="Large Generated Image/Video">`
}