// document.styleSheets[1].disabled = true;
// document.styleSheets["#heart-css"].disabled = true;
let css = {
    body: {
        cssName: "body",
        cssFile: document.styleSheets[0]
    },
    heart: {
        cssName: "heart",
        cssFile: document.styleSheets[1]
    },
    cross: {
        cssName: "cross",
        cssFile: document.styleSheets[2]

    }
};

console.log("css l", css);

let body = document.querySelector("body");
let menu = document.querySelector("#menu");
let previewContainer = document.querySelector("#preview-container");
let animationContainer = document.querySelector(".animation-container");
let animationDiv = document.querySelector("#animation-div")

let buttonContainer = document.querySelector("button-container");
let btnHeart = document.querySelector(".btn-heart");
let btnCross = document.querySelector(".btn-cross");


const clearCss = () => {
    console.log(css.heart.cssFile.disabled);
    css.heart.cssFile.disabled = true;
    css.cross.cssFile.disabled = true;
}

body.addEventListener("click", (e) => {
    e.preventDefault;

    if (e.target.classList.contains("btn")) {
        console.log("test 1");
        clearCss();
        if (e.target === btnHeart) {

            css.heart.cssFile.disabled = false;
            // document.styleSheets[0].disabled = "false";
            console.log("css.heart.disabled", css.heart.cssFile.disabled);
            animationDiv.classList.remove("cross");
            animationDiv.classList.add("heart");
            btnHeart.classList.add("active");
            btnCross.classList.remove("active");

        } else if (e.target === btnCross) {

            css.cross.cssFile.disabled = false;
            console.log("css.cross.disabled", css.cross.cssFile.disabled);
            animationDiv.classList.remove("heart");
            animationDiv.classList.add("cross");
            btnHeart.classList.remove("active");
            btnCross.classList.add("active");
        }
    }
});