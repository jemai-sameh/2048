
var size=4;
var min=0;
var max=size-1;
var isMoved = false;
var score = 0;
var excludeIds = [];

const getRandom=()=>Math.floor(Math.random()*(max-min+1)+min);
const getId=()=>getRandom()+""+getRandom();
const getElement=(id)=>document.getElementById(id.toString());
const setElement=(id,value)=>{
    getElement(id).innerHTML=value.toString();
    getElement(id).style.backgroundColor=getColor(parseInt(value));
}

//let getColor=(value)

function getColor(val)
{
    var color = "#9daeb35e";
    switch(val) {
        case 2:		color = "#F6CED8"; break;
        case 4:		color = "#F7BE81"; break;
        case 8:		color = "#F3F781"; break;
        case 16:	color = "#BEF781"; break;
        case 32:	color = "#81F7D8"; break;
        case 64:	color = "#58D3F7"; break;
        case 128:	color = "#FA58F4"; break;
        case 256:	color = "#A901DB"; break;
        case 512:	color = "#01DF3A"; break;
        case 1024:	color = "#D7DF01"; break;
        case 2048:	color = "#D7DF01"; break;
        default:	color = "#9daeb35e";
    }
    return color;
}

function startGame(){
    let id1=getId();
    let id2="";
    while(true){
        id2=getId();
        if (id1!=id2)
            break
    }
    setElement(id1,2);
    setElement(id2,2);
    score=0;
    return false;
}
function addNewValue(){
    var ids=[];
    for (let i = min; i <= max; i++) {
        for (let j = min; j <= max; j++) {
            if (getElement(i+""+j).innerHTML=="")
                ids.push(i+""+j);
        }        
    }
    /*console.log(ids)*/
    let id =ids[Math.floor(Math.random()*ids.length)]

    //console.log(id);
    setElement(id,2);
    if (ids.length-1==0){
        console.log("goodBy");
    }


}

let moveUp=(id)=>{
    if (!id.startsWith(min)){
        let i=parseInt(id.slice(0,1));
        let j=parseInt(id.slice(1));
       // console.log(i+""+j);
        for (let k = (i-1); k >= min; k--) {
            let nID=k+""+j;
            if (getElement(nID).innerHTML!=""){
                let currentValue=parseInt(getElement((k+1)+""+j).innerHTML);
                let secondValue=parseInt(getElement(nID).innerHTML);
                if (currentValue==secondValue){
                    if(excludeIds.indexOf(nID)==-1){
                        excludeIds.push(nID);
                        setElement(nID,(currentValue+secondValue));
                        setElement(((k+1)+""+j),"")
                        isMoved=true;
                        //score+=currentValue+secondValue;
                    }
                }
                break;

            }
            else{
                setElement(nID,getElement((k+1)+""+j).innerHTML);
                setElement(((k+1)+""+j),"");
                isMoved=true;
            }          
        }
    }
    return false;
}

let up=()=>{
    isMoved= false;
    excludeIds=[];
    for (let i = min; i <= max; i++) {
        for (let j = min; j <= max; j++) {
            if (getElement(j+""+i).innerHTML!="")
                moveUp(j+""+i);
        }        
    }
    if (isMoved)
        addNewValue()
    
    return false;

}


let moveLeft=(id)=>{
    if (!id.endsWith(min)){
        let i=parseInt(id.slice(0,1));
        let j=parseInt(id.slice(1));
        for (let k = (j-1); k >= min; k--) {
            let nID=i+""+k;
            if (getElement(nID).innerHTML!=""){
                let currentValue=parseInt(getElement(i+""+(k+1)).innerHTML);
                let secondValue=parseInt(getElement(nID).innerHTML);
                if (currentValue==secondValue){
                    if(excludeIds.indexOf(nID)==-1){
                        excludeIds.push(nID);
                        setElement(nID,(currentValue+secondValue));
                        setElement((i+""+(k+1)),"")
                        isMoved=true;
                        //score
                    }
                }
                break;

            }
            else{
                setElement(nID,getElement(i+""+(k+1)).innerHTML);
                setElement((i+""+(k+1)),"");
                isMoved=true;
            }
            
        }

    }

}

let left=()=>{
    isMoved=false;
    excludeIds=[];

    for (let i = min; i <= max; i++) {
        for (let j = min; j <= max; j++) {
            if (getElement(i+""+j).innerHTML!="")
                moveLeft(i+""+j);
        }        
    }


    if (isMoved)
        addNewValue();
    
    return false;

}

let moveDown=(id)=>{
    if (!id.startsWith(max)){
        let i=parseInt(id.slice(0,1));
        let j=parseInt(id.slice(1));
        for (let k = (i+1); k <= max; k++) {
            let nID=k+""+j;
            if (getElement(nID).innerHTML!=""){
                let currentValue=parseInt(getElement((k-1)+""+j).innerHTML);
                let secondValue=parseInt(getElement(nID).innerHTML);
                if (currentValue==secondValue){
                    if(excludeIds.indexOf(nID)==-1){
                        excludeIds.push(nID);
                        setElement(nID,(currentValue+secondValue));
                        setElement(((k-1)+""+j),"")
                        isMoved=true;
                        //score
                    }
                }
                break;

            }
            else{
                setElement(nID,getElement((k-1)+""+j).innerHTML);
                setElement(((k-1)+""+j),"");
                isMoved=true;
            }
            
        }

    }
    return false;

}

let down =()=>{
    isMoved=false;
    excludeIds=[];

    for (let i = min; i <= max; i++) {
        for (let j = max; j >= min; j--) {
            if (getElement(j+""+i).innerHTML!="")
                moveDown(j+""+i);
        }        
    }
    if (isMoved)
        addNewValue()
    
    return false;

}


let moveRight=(id)=>{
    if (!id.endsWith(max)){
        let i=parseInt(id.slice(0,1));
        let j=parseInt(id.slice(1));
        for (let k = (i+1); k <= max; k++) {
            let nID=i+""+k;
            if (getElement(nID).innerHTML!=""){
                let currentValue=parseInt(getElement(i+""+(k-1)).innerHTML);
                let secondValue=parseInt(getElement(nID).innerHTML);
                if (currentValue==secondValue){
                    if(excludeIds.indexOf(nID)==-1){
                        excludeIds.push(nID);
                        setElement(nID,(currentValue+secondValue));
                        setElement((i+""+(k-1)),"")
                        isMoved=true;
                        //score
                    }
                }
                break;

            }
            else{
                setElement(nID,getElement(i+""+(k-1)).innerHTML);
                setElement((i+""+(k-1)),"");
                isMoved=true;
            }
            
        }

    }

}

let right=()=>{
    isMoved=false;
    excludeIds=[];

    for (let i = min; i <= max; i++) {
        for (let j = max; j >=min; j--) {
            if (getElement(i+""+j).innerHTML!="")
                moveRight(i+""+j);
        }        
    }


    if (isMoved)
        addNewValue()

}

if ( typeof String.prototype.startsWith != 'function' ) {
    String.prototype.startsWith = function( str ) {
      return this.substring( 0, str.length ) === str;
    }
  };
if ( typeof String.prototype.endsWith != 'function' ) {
    String.prototype.endsWith = function( str ) {
      return this.substring( this.length - str.length, this.length ) === str;
    }
  };
  document.onkeydown = function(e) {
    e.preventDefault();//to prevent scroll of screen
    switch (e.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
    }
};

startGame()
//addNewValue()