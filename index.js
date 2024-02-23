var ImgArray = [
    './img/A.jpg',
    './img/B.jpg',
    './img/C.jpg',
    './img/D.jpg',
    './img/E.jpg',
    './img/F.jpg',
    './img/G.jpg',
    './img/H.jpg'
]

function setImage(leftSrc, rightSrc) {
    let leftImg = document.getElementById("leftImg");
    let rightImg = document.getElementById("rightImg");
    leftImg.src = leftSrc;
    rightImg.src = rightSrc;
}

function imgClick(id) {
    let img;

    if(id == "leftImg"){
        img = "./img/" + document.getElementById("rightImg"). getAttribute("src").split("/").pop();
    } else if(id == "rightImg"){
        img = "./img/" + document.getElementById("leftImg"). getAttribute("src").split("/").pop();
    }

    ImgArray = ImgArray.filter(item => item !== img);

    if(ImgArray.length >= 2){
        ImgArray = shuffleArray(ImgArray);
        setImage(ImgArray [0], ImgArray [1]);
    }
    else if(ImgArray.length <2){
        alert("끝");

        document.body.innerHTML = "";

        var text = document.createElement("h1");
        text.textContent = "당신의 이상형은!";

        var lastImg = document.createElement("img");
        lastImg.src = ImgArray[0];

        document.body.append(text, lastImg);
    }

}

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
