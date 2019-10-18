// Styling the expanded menu function
var j=0;
var i=document.getElementById("menu").childNodes;
function expand() {
    if (j==0) {
        document.getElementById("add").style.transform = "rotate(45deg)";
        document.getElementById("menu").style.transform = "scale(1)";
        i[1].style.transform="translateY(-190px)"; // top
        i[3].style.transform="translate(160px, -100px)"; //top right
        i[5].style.transform="translate(160px, 100px)"; //bottom right
        i[7].style.transform="translateY(190px)"; //bottom
        i[9].style.transform="translate(-160px, 100px)"; //bottom left
        i[11].style.transform="translate(-160px, -100px)"; //top left
        j=1;

    } else {
        document.getElementById("add").style.transform = "rotate(0deg)";
        document.getElementById("menu").style.transform = "scale(1)";
        i[1].style.transform="translateY(0)";
        i[3].style.transform="translate(0)";
        i[5].style.transform="translate(0)";
        i[7].style.transform="translateY(0)";
        i[9].style.transform="translate(0)";
        i[11].style.transform="translate(0)";
        j=0;
    }
}