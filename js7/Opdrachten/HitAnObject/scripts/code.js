let timerId=0;

let global = {
    IMAGE_COUNT:5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",

    MOVE_DELAY: 3000,

    score: 0,
    timeoutId:0
}


const setup = () => {
    let image = document.getElementsByTagName("img")[0];
    image.addEventListener("click", imageTickClick )
    timerId=setInterval(imageTickInterval, 1500);
    let score = document.createElement("p")
    score.textContent = "score = " + global.score;
}

const gameOver = () => {
    alert("GAME OVER!");
    clearInterval(timerId);
}

const imageTickInterval = () => {

    veranderImage()
    verplaatsImage()

}

const imageTickClick = () => {
    let image = document.getElementsByTagName("img")[0];
    if(image.getAttribute("src") == "images/0.png"){
        gameOver()
    } else {
        veranderImage()
        verplaatsImage()
        global.score++
    }



}

const veranderImage = () => {
    let randomImageNumber = Math.floor(Math.random() * global.IMAGE_COUNT)
    let image = document.getElementsByTagName("img")[0]
    let source = global.IMAGE_PATH_PREFIX + randomImageNumber + global.IMAGE_PATH_SUFFIX
    image.setAttribute("src", source)
}

const verplaatsImage = () => {
    let image=document.getElementsByTagName("img")[0];
    let playField=document.getElementById("playField");
    let maxLeft=playField.clientWidth - image.offsetWidth;
    let maxHeight=playField.clientHeight - image.offsetHeight;

    // verplaats de sprite
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    image.style.left=left+"px";
    image.style.top=top+"px";
}


window.addEventListener("load", setup);


