
//if statement for mouseclicked 
function popSteven() {
	//if you click "religion" (the first link of text) than "steven" is displayed. If "steven" is displayed and you click again then  	"steven" is no longer displayed
   if(steven.style.display == "unset"){
	    document.getElementById("steven").style.display = "none";
	    console.log("none");
    } else{
	    document.getElementById("steven").style.display = "unset";
		console.log("unset");      
    }
	
};


//function for mouseover. When your mouse is over the text than show "steven"
function popSteven2() {
 		document.getElementById("steven").style.display = "unset";
		console.log("unset");
};

//function for onmouseout. When your mouse is no longer over the text than hide "steven"
function popSteven3(){	
	   steven.style.display == "unset";
	    document.getElementById("steven").style.display = "none";
	    console.log("none"); 
};