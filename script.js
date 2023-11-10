// creates a variable to target the date picker
const $chooseDate = document.getElementById('datePicker')

// creates a variable to target the generate button
const $generateButton = document.getElementById('generate-btn')

// uses the addEventListener method to create a click function to the generate button
$generateButton.addEventListener('click', ()=>{
    console.log('button pressed')
    sendApiRequest($chooseDate.value)
})

// retrives array, uses parse method to get object data back from the api
const getobjData = localStorage.getItem('array')
const prseArray = []
prseArray = JSON.parse(getobjData)

// creates an async function to fetch data from the NASA APOD API
async function sendApiRequest(date){
    let API_KEY = "rBrWOtPUsRcCbdwGdfUbAEbX9h7vDWIHdeyeOmOZ"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useAPIData(data)

    // uses the addEventListener method and if statement to create a click function to save image data to local storage & favourites
    const $favsimgButton = document.getElementById('favsimgSave')
    let favImages = []
        $favsimgButton.addEventListener('click', ()=>{
            // creates an array to store saved image data
            if (localStorage.getItem('favArray')) {
                favImages = JSON.parse(localStorage.getItem('favArray'))
                console.log(favImages)
            } else {
                favImages = []
            }
            favImages.push(data)
            console.log(data)

            const a = favImages.map(el => `
            <div class="container w-100 p-1 border border-3 border-success rounded-4">
                <div id="ImgFavImg"><img class="w-100" src="${el.url}" alt=""></div>
                <h3 id="imgFavTitle" class="text-light fs-4 mt-3 text-center"> ${el.title}</h3>
                <div class="text-center">
                    <button id="trash-btn" aria-label="Click to delete image/video" type="button" class="btn text-light fs-1"><i class="bi bi-trash"></i></button>
                </div>
            </div>`)
            document.getElementById('favs-imgs').innerHTML = a.join()
            console.log(a)

            // pushes data from api object array, uses stringify to turn the object property into a string
            const jsonArray = JSON.stringify(favImages)
            localStorage.setItem('favArray', jsonArray)

        })
        // const $trashBtn = document.getElementById('trash-btn')
        // $
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