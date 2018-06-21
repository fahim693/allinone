window.onload=function(){

    var quotes=["The enemy of my enemy is my friend.","The weak fall, but the strong will remain and never go under!","Sometimes you don\'t realize your own strength until you come face to face with your greatest weakness.","Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.","Success is not final, failure is not fatal: it is the courage to continue that counts","True strength is keeping everything together when everyone expects you to fall apart.","Dream as if you\'ll live forever, live as if you\'ll die today.","The weak can never forgive. Forgiveness is the attribute of the strong.","You cannot dream yourself into a character; you must hammer and forge yourself one.","A heart is a muscle..and what do muscles do when they are torn? They grow back STRONGER!"];

    var colors=["#9c27b0","#795548","#004d40","#009688","#cddc39","#4caf50","#795548","#4a148c"];
    var border=["#c62828","#424242","#3f51b5","#827717","#212121","#FFFFFF","#757575","#795548"];
    var fontColors=["#f5f5f5","#c8e6c9","#f0f4c3","#6d4c41","#4a148c","#000000","#ffe0b2","#cfd8dc"];
    var fontFamily=["fantasy","cursive","monoscape","cursive","fantasy","cursive","sans-serif","fantasy","cursive"];

    var x=(Math.floor(Math.random()*10));
    
    document.getElementById("quote").innerHTML=quotes[x];
    document.getElementById("innerbox").style.backgroundColor="#4a148c";
    document.getElementById("innerbox").style.borderColor="#795548";
    //document.getElementById("innerbox").style.background=colors[x];
    //document.getElementById("innerbox").style.borderColor=border[x];
    document.getElementById("innerbox").style.color="#FFF";
    //document.getElementById("innerbox").style.fontFamily=fontFamily[x];

};

function color1(){
        document.getElementById("innerbox").style.backgroundColor="#4a148c";
    document.getElementById("innerbox").style.borderColor="#795548";
    document.getElementById("innerbox").style.color="#cfd8dc";
    document.getElementById("innerbox").style.fontFamily="fantasy";
    }

function color2(){
        document.getElementById("innerbox").style.backgroundColor="#4caf50";
    document.getElementById("innerbox").style.borderColor="#FFFFFF";
    document.getElementById("innerbox").style.color="#000000";
    document.getElementById("innerbox").style.fontFamily="cursive"
    }
function color3(){
        document.getElementById("innerbox").style.backgroundColor="#795548";
    document.getElementById("innerbox").style.borderColor="757575";
    document.getElementById("innerbox").style.color="#ffe0b2";
    document.getElementById("innerbox").style.fontFamily="monoscape";
    }
function color4(){
        document.getElementById("innerbox").style.backgroundColor="#cddc39";
    document.getElementById("innerbox").style.borderColor="#212121";
    document.getElementById("innerbox").style.color="#4a148c";
    document.getElementById("innerbox").style.fontFamily="serif";
    }
function color5(){
        document.getElementById("innerbox").style.backgroundColor="#009688";
    document.getElementById("innerbox").style.borderColor="#827717";
    document.getElementById("innerbox").style.color="#6d4c41";
    document.getElementById("innerbox").style.fontFamily="cursive";
    }
function color6(){
        document.getElementById("innerbox").style.backgroundColor="#004d40";
    document.getElementById("innerbox").style.borderColor="#3f51b5";
    document.getElementById("innerbox").style.color="#f0f4c3";
    document.getElementById("innerbox").style.fontFamily="fantasy";
}
