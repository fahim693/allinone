function clearAll(){
    document.getElementById("texts").value="";
}
var i=0;

function capitalize(){
    
    var div=document.getElementById("texts");
    //    var paragraph=div.getElementsByTagName("P");
    //
    //    for(var i=0;i<paragraph.length;i++){
    //        if(paragraph[i].innerHTML==paragraph[i].innerHTML.toLowerCase()){
    //            paragraph[i].innerHTML=paragraph[i].innerHTML.toUpperCase();
    //            document.getElementById("header").innerHTML=document.getElementById("header").innerHTML.toUpperCase();
    //        }else if(paragraph[i].innerHTML==paragraph[i].innerHTML.toUpperCase()){
    //            paragraph[i].innerHTML=paragraph[i].innerHTML.toLowerCase();  
    //            document.getElementById("header").innerHTML=document.getElementById("header").innerHTML.toLowerCase();
    //        }    
    //
    //    }

    if(i==0){
        div.value=div.value.toUpperCase();
        i=1;
        //document.getElementById("header").innerHTML=document.getElementById("header").innerHTML.toUpperCase();
    }else if(i==1){
        div.value=div.value.toLowerCase();  
        i=0;
        //document.getElementById("header").innerHTML=document.getElementById("header").innerHTML.toLowerCase();
    }


}

function sort(){
    var div=document.getElementById("texts").value;
    var res=div.split("\n");
    var sortedString=res.sort();
    var joinString=sortedString.join("\n");
    document.getElementById("texts").value=joinString;

    //document.write(sort);
}

function reversePrint(){
    //    var loremPar=document.getElementById("lorem").innerHTML;
    //    var ipsumPar=document.getElementById("ipsum").innerHTML;
    //    var dolorPar=document.getElementById("dolor").innerHTML;
    //    var loremParSplit=loremPar.split(" ");
    //    var ipsumParSplit=ipsumPar.split(" ");
    //    var dolorParSplit=dolorPar.split(" ");
    //    
    //    var loremShow=loremParSplit.reverse();
    //    var ipsumShow=ipsumParSplit.reverse();
    //    var dolorShow=dolorParSplit.reverse();
    //   
    //    document.getElementById("lorem").innerHTML=loremShow;
    //    document.getElementById("ipsum").innerHTML=ipsumShow;
    //    document.getElementById("dolor").innerHTML=dolorShow;
    //    
    //    var div=document.getElementById("texts");
    //    var paragraph=div.getElementsByTagName("P");

    var div=document.getElementById("texts").value;
    var res=div.split("\n");
    
    for(var i=0;i<res.length;i++){
        res[i]=res[i].split("").reverse().join("");
    }
    
    var joinString=res.join("\n");
    document.getElementById("texts").value=joinString;
    
    

}

function blank(){
	var str = document.getElementById("texts").value;
    //Split all single line inputs
    var array = str.split("\n");
	str="";
    //removes blank spaces from first and last of a line
	for(i = 0; i < array.length; i++){
		array[i] = array[i].trim();
        str+=array[i]+"\n";
	}
	//deletes empty line
	var output = str.replace(/^\s*$[\n\r]{1,}/gm, '');
	document.getElementById("texts").value = output;

    //var arr=par.split(" ");
    //    var loremRep=loremPar.replace(/ /g,"");
    //    var ipsumRep=ipsumPar.replace(/ /g,"");
    //    var dolorRep=dolorPar.replace(/ /g,"");
    //    document.getElementById("lorem").innerHTML=loremRep;
    //    document.getElementById("ipsum").innerHTML=ipsumRep;
    //    document.getElementById("dolor").innerHTML=dolorRep;
}
//var repNum=false;
function addNumber(){
    
    //var paragraph=div.getElementsByTagName("P");
    
    //if(repNum==false){
    var div=document.getElementById("texts").value;
    var res=div.split("\n");
            for(var i=0;i<res.length;i++){
        res[i]=i+1+". "+res[i];
   // }

    var joinArray=res.join("\n");
    document.getElementById("texts").value=joinArray;
    repNum=true;
    }
    //    for(var i=0;i<paragraph.length;i++){
    //        paragraph[i].innerHTML=i+1+". "+paragraph[i].innerHTML;
    //    }
}

function shuffle(){
    var div=document.getElementById("texts").value;
    var res=div.split("\n");
    //var paragraph=div.getElementsByTagName("P");

    //var randomVal1=Math.floor(Math.random()*(paragraph.length));
    //var randomVal2=Math.floor(Math.random()*(paragraph.length));

    for (var i = res.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = res[i];
        res[i] = res[j];
        res[j] = temp;
    }

    var joinArray=res.join("\n");
    document.getElementById("texts").value=joinArray;

}