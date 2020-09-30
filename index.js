
const colors = [{ name: "red", motto: "queite Red" },
{ name: "yellow", motto: "schön yellow" },
{ name: "blue", motto: "Ocean blue" },
{ name: "brown", motto: "dark brown" },
{ name: "salmon", motto: "quite orange" },
];
const colorButton = document.querySelector(".button");
const colorLabel = document.querySelector(".color-label");
const setColor = document.querySelector(".set-color");
const myInput = document.querySelector("#input");
const mottoName = document.querySelector("#mottoName");
// console.log(colors.length)
colorButton.addEventListener("click", Compute);
function Compute() {
    const numbers = Math.floor(Math.random() * colors.length);
    document.querySelector("body").style.backgroundColor = colors[numbers].name;
    colorLabel.innerHTML = colors[numbers].name;
    mottoName.innerHTML = colors[numbers].motto;

}


setColor.addEventListener("click", addColor);
function addColor() {
    const colorData = myInput.value.split(":");
    const addObject = {
        name: colorData[0],
        motto: colorData[1]
    }


    if (colorData[0] == "" || colorData[1] == "" ) {
        alert("please add a color and motto")
    }
    else if (colors.indexOf(color => color.name === addObject.name) === -1) {
        document.querySelector("body").style.backgroundColor = addObject.name;
        colorLabel.innerHTML = addObject.name;
        mottoName.innerHTML = addObject.motto;
        myInput.value = ""
        myInput.focus();
        colors.push(addObject)
    }



    else {
        alert("this color has already added")
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