$(document).foundation();
$(document).ready(function() {
    //var first_container =document.getElementById("contact-section-inner-2");
	var container= document.getElementById("container-2");
	document.getElementById("container-2").style.filter = "blur(8px)";
	//document.getElementById("container-2").style.height = "0px";
	for(var i=0;)
  if(container.style.height== "0px"){
  	document.getElementById("container-2").style.filter = "blur(8px)";
  }

  else{
  	document.getElementById("container-2").style.filter = "blur(0px)";
  }
    
        
    });
