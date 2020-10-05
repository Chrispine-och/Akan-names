var akanMaleNames = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw" ,"Kofi" ,"Kwame"]
var akanFemaleNames = ["Akosua" ,"Adwoa","Abenaa","Akua","Yaa","Afua","Ama" ]
function searchnames() {
    var year = document.getElementById("year").value;
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var gender = document.getElementById("gender").value;
   

    var CC = parseInt(year.substr(0,2));
    var YY = parseInt(year.substr(2,4)); 

    var MM = month
    var DD = date
    var d = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

    if ( MM<= 0 || MM> 12 )  {
        alert("invalid month")
        
    } else 
    if (DD<=0 || DD>31) {
        alert("invalid date")
    }else
    if (gender === "Male"){ 
        alert("your akan name is " + akanMaleNames [d]) 

    

    }
    else 
    if (gender === "Female"){
        alert("your akan name is " + akanFemaleNames [d] ) 
    }
        

    }
    

