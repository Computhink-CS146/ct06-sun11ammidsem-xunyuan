let Xpos = 50;
let Ypos = 50;
let colorMe = 0;
function setup(){
    createCanvas(600,600);
    background("lightgrey");

    for(let count=0; count<10;count++) {
        fill(colorMe);
        circle (Xpos,Ypos,50);
        Xpos = Xpos +55;
        Ypos = Ypos + 55;
        colorMe = colorMe + 67;
        

    }
}
