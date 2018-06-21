function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    
    if (charCode != 44 && charCode != 46 && charCode > 31 &&(charCode < 48 || charCode > 57 )) {
        return false;
    }
    
    return true;
};

function showChange(){
   var inputVal=document.getElementById("numbers").value;
    //var name="I,am,Fahim";
    var res=inputVal.split(",");
       
    var showMax=Math.max.apply(null,res);
    document.getElementById("max_num").innerHTML=showMax;
    
    var showMin=Math.min.apply(null,res);
    document.getElementById("min_num").innerHTML=showMin;
    
    var sum=0;
    for(var i=0;i<res.length;i++){
        sum=sum+parseFloat(res[i]);
    }
    document.getElementById("sum").innerHTML=sum;
    
    var avg=sum/res.length;
    document.getElementById("average").innerHTML=avg;
    
    
     
     document.getElementById("reverse").innerHTML=res.reverse();
   
    
};
