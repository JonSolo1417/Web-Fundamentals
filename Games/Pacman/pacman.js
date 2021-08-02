var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2,2,2,2,2,1,2],
    [2,4,2,0,0,2,1,2,0,0,0,2,1,2,2,1,2,0,0,2,1,2,0,0,0,2,4,2],
    [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
    [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,1,2,2,2,2,2,0,2,2,0,2,2,2,2,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,2,1,2,2,2,2,2,0,2,2,0,2,2,2,2,2,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,1,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,1,2,2,0,2,2,2,0,0,2,2,2,0,2,2,1,2,0,0,0,0,0],
    [2,2,2,2,2,2,1,2,2,0,2,0,0,0,0,0,0,2,0,2,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0],
    [2,2,2,2,2,2,1,2,2,0,2,0,0,0,0,0,0,2,0,2,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,2,1,2,2,0,2,2,2,2,2,2,2,2,0,2,2,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,1,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,1,2,2,0,2,2,2,2,2,2,2,2,0,2,2,1,2,0,0,0,0,0],
    [2,2,2,2,2,2,1,2,2,0,2,2,2,2,2,2,2,2,0,2,2,1,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
    [2,4,1,1,2,2,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,2,2,1,1,4,2],
    [2,2,2,1,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2],
    [2,2,2,1,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2],
    [2,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];
var y = 23;
var x = 14;
var pts=0;

function displayWorld(){
    var output = "";
    for(var i =0; i<world.length;i++){
        output+= "\n<div class='row'>";
        for(var x=0; x<world[i].length;x++){
            if (world[i][x]==2){
                output+="\n\t<div class='brick'></div>";
            }
            else if (world[i][x]==1){
                output+="\n\t<div class='coin'></div>";
            }
            else if (world[i][x]==0){
                output+="\n\t<div class='empty'></div>";
            }
            else if (world[i][x]==4){
                output+="\n\t<div class='coinXL'></div>";
            }
            else if (world[i][x]==5){
                output+="\n\t<div class='pacmanLeft' ></div>";
            }
            else if (world[i][x]==6){
                output+="\n\t<div class='pacmanRight' ></div>";
            }
            else if (world[i][x]==7){
                output+="\n\t<div class='pacmanUp' ></div>";
            }
            else if (world[i][x]==8){
                output+="\n\t<div class='pacmanDown' ></div>";
            }
        }
        output+= "\n</div>";
    }
    document.getElementById("world").innerHTML=output;
    document.getElementById("num").innerHTML=pts;
    moves();
}

function moves(){
    document.onkeydown = function(e){
        ele=document.getElementById("pacman");
        if(e.key == "ArrowDown"){
            if (world[y+1][x]==2){
            }
            else{
            if(world[y+1][x]==4){
                pts+=50;
            }
            if(world[y+1][x]==1){
                pts+=10;
            }
            y+=1;
            world[y][x]=8
            world[y-1][x]=0
            }
        }
        if(e.key == "ArrowUp"){
            if (world[y-1][x]==2){
            }
            else{
            if(world[y-1][x]==4){
                pts+=50;
            }
            if(world[y-1][x]==1){
                pts+=10;
            }
            y-=1;
            world[y][x]=7
            world[y+1][x]=0
            }
        }
        if(e.key == "ArrowLeft"){
            if (world[y][x-1]==2){
            }
            else{
            if(world[y][x-1]==4){
                pts+=50;
            }
            if(world[y][x-1]==1){
                pts+=10;
            }
            x-=1;
            world[y][x]=5
            world[y][x+1]=0
            }
        }
        if(e.key == "ArrowRight"){
            if (world[y][x+1]==2){
            }
            else{
            if(world[y][x+1]==4){
                pts+=50;
            }
            if(world[y][x+1]==1){
                pts+=10;
            }
            x+=1;
            world[y][x]=6
            world[y][x-1]=0
            }
        }
        displayWorld();
    }
}
displayWorld();