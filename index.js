
const colors = ["red", "yellow", "blue", "brown", "salmon"];
const colorButton = document.querySelector(".button");
const colorLabel = document.querySelector(".color-label");
const setColor = document.querySelector(".set-color");
const myInput = document.querySelector("#input");

colorButton.addEventListener("click", Compute);
function Compute() {
    const numbers = Math.floor(Math.random() * colors.length);
    document.querySelector("body").style.backgroundColor = colors[numbers];
    colorLabel.innerHTML = colors[numbers]

}


setColor.addEventListener("click", addColor);
function addColor() {
   
       if (colors.includes(myInput.value)){
        alert("this color has already added")
       }
       else{
           colors.push(myInput.value)
           document.querySelector("body").style.backgroundColor = myInput.value;
           myInput.value =""
           myInput.focus();
       } 



   
    

     



}




















1










// // Change The Colors

// const colors = ["red", "blue", "gray", "green", "purple"];
// const buttonElement = document.querySelector("#randomColorButton");
// buttonElement.addEventListener("click", changeColors);
// // buttonElement.addEventListener("click", () => changeColors());
// buttonElement.addEventListener("click", function () {
// // //     changeColors()
// // // });
// // function changeColors() {
// //     const randomIndex = Math.floor(Math.random() * colors.length);
// //     document.querySelector("body").style.backgroundColor = colors[randomIndex];
// //     console.log(colors[randomIndex]);
// // }






// ///////////////////////////////////////////////////////////////

// // Change The Colors!

// const colors = [
//     {
//       name: "red",
//       motto: "Rose Red",
//     },
//     {
//       name: "blue",
//       motto: "Ocean Blue",
//     },
//     {
//       name: "gray",
//       motto: "Smoke Gray",
//     },
//     {
//       name: "green",
//       motto: "Grass Green",
//     },
//     {
//       name: "purple",
//       motto: "Deep Purple",
//     },
//   ];

//   const randomColorButton = document.querySelector("#randomColorButton");
//   const addColorButton = document.querySelector("#setColorButton");

//   addColorButton.addEventListener("click", addColor);
//   randomColorButton.addEventListener("click", changeColors);
//   // randomColorButton.addEventListener("click", () => changeColors());
//   // randomColorButton.addEventListener("click", function () {
//   //   changeColors();
//   // });

//   // 1) Arrayden rastgele element seçmek
//   function changeColors() {
//     const randomIndex = Math.floor(Math.random() * colors.length);

//     document.querySelector("#colorName").textContent = colors[randomIndex].name;
//     document.querySelector("#colorDesc").textContent = colors[randomIndex].motto;

//     document.querySelector("body").style.backgroundColor =
//       colors[randomIndex].name;
//   }

//   // 2) Kullanıcının girdiği string'i renk listesine eklemek ve arkaplanı o renk ile güncellemek
//   function addColor() {
//     const userInput = document.querySelector(".colorInput");

//     const colorData = userInput.value.split(":");

//     const colorObject = {
//       name: colorData[0],
//       motto: colorData[1],
//     };

//     // indexOf SADECE flat array (["red", "blue"] / [1, 2, 3]) geçerlidir.
//     // findIndex object arraylerde geçerlidir.

//     if (colors.findIndex((color) => color.name === colorObject.name) === -1) {
//       document.querySelector("body").style.backgroundColor = colorObject.name;
//       document.querySelector("#colorName").textContent = colorObject.name;
//       document.querySelector("#colorDesc").textContent = colorObject.motto;

//       colors.push(colorObject);
//       userInput.value = "";
//       userInput.focus();
//     } else {
//       alert("Renk zaten mevcut!");
//     }
//   }