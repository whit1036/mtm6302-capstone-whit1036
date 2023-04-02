const $generateButton = document.getElementById('generate-btn')

$generateButton.addEventListener('click', ()=>{
    console.log('button pressed')
    sendApiRequest()
})

async function sendApiRequest(){
    let API_KEY = "rBrWOtPUsRcCbdwGdfUbAEbX9h7vDWIHdeyeOmOZ"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useAPIData(data)
}

function useAPIData(data) {
    document.getElementById('exData').innerHTML += data.explanation
    document.getElementById('dateData').innerHTML += data.date
    document.getElementById('nameData').innerHTML += data.title
    document.getElementById('modalnameData').innerHTML += data.title
    document.getElementById('imgData').innerHTML += `<img src="${data.url}" class="w-75" alt="Small Generated Image/Video">`
    document.getElementById('hdimgData').innerHTML += `<img src="${data.hdurl}" class="w-100" alt="Large Generated Image/Video">`
}