var icon = document.getElementById("icon");
    icon.onclick = function(){
        document.body.classList.toggle("lightmode");  //this will call the darkmode class
    
        if( document.body.classList.contains("lightmode")) {      //this will change the icon 
            icon.src = "moon.png";     
        } else {
            icon.src = "sun.png";
        }
    }