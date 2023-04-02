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
}