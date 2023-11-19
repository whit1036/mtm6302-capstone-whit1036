// creates a variable to target the date picker
const $chooseDate = document.getElementById("datePicker");

// creates a variable to target the generate button
const $generateButton = document.getElementById("generate-btn");

// uses the addEventListener method to create a click function to the generate button
$generateButton.addEventListener("click", () => {
  sendApiRequest($chooseDate.value);
});

// retrives array, uses parse method to get object data back from the api
const getobjData = localStorage.getItem("array");
const prseArray = [];
// prseArray = JSON.parse(getobjData);

// creates an async function to fetch data from the NASA APOD API
async function sendApiRequest(date) {
  let API_KEY = "rBrWOtPUsRcCbdwGdfUbAEbX9h7vDWIHdeyeOmOZ";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
  );
  let data = await response.json();
  useAPIData(data);
  // uses the addEventListener method and if statement to create a click function to save image data to local storage & favourites
  const $favsimgButton = document.getElementById("favsimgSave");

  // ============check  local storage===================================
  const checklocalStorage = function () {
    if (localStorage.getItem("favArray")) {
      favImages = JSON.parse(localStorage.getItem("favArray"));
    }
    if (!localStorage.getItem("favArray")) {
      favImages = [];
    }
  };
  //   ===========function to output html template=========================
  const printHTML = function () {
    // ========delete array function================

    const a = favImages.map(
      (el) => `
                    <div class="container w-100 p-1 border border-3 border-success rounded-4">
                        <div id="ImgFavImg"><img class="w-100" src="${el.url}" alt=""></div>
                        <h3 id="imgFavTitle" class="text-light fs-4 mt-3 text-center"> ${el.title}</h3>
                        <div class="text-center">
                            <button  class="trash-btn" aria-label="Click to delete image/video" type="button" class="btn text-light fs-1"><i data-id="${el.date}" class="bi bi-trash"></i></button>
                        </div>
                    </div>`
    );
    document.getElementById("favs-imgs").innerHTML = a.join();

    // ==============target all buttons=========================
    const deleteToggle = document.querySelectorAll(".trash-btn");

    deleteToggle.forEach((obj) =>
      obj.addEventListener("click", (e) => deleteItem(e.target.dataset.id))
    );
  };
  // ==========output local storage data==================
  //   step-1  create empty array
  let favImages = [];
  //   setp-2 check localstorage
  checklocalStorage();
  //   setp-3 if yes, print template. If add to new array replace html template
  printHTML();
  //   ==========add to new favorite===========================
  $favsimgButton.addEventListener("click", () => {
    // creates an array to store saved image data
    favImages.push(data);
    printHTML();
    // pushes data from api object array, uses stringify to turn the object property into a string
    const jsonArray = JSON.stringify(favImages);
    localStorage.setItem("favArray", jsonArray);
  });
}

// ==========should use class instead of ID otherwise it only target one object ============================

// Call the API with no date value to display today's picture
sendApiRequest("");

// creates a function to use the data found in the API to dynamically insert API data
function useAPIData(data) {
  document.getElementById("exData").innerHTML = data.explanation;
  document.getElementById("dateData").innerHTML = data.date;
  document.getElementById("nameData").innerHTML = data.title;
  document.getElementById("modalnameData").innerHTML = data.title;
  document.getElementById(
    "imgData"
  ).innerHTML = `<img src="${data.url}" class="w-75" alt="Small Generated Image/Video">`;
  document.getElementById(
    "hdimgData"
  ).innerHTML = `<img src="${data.hdurl}" class="w-100" alt="Large Generated Image/Video">`;
}