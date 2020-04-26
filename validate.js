function validateform()
{
    var reg = document.getElementById("reg").value;
    if(reg.length!=11)
    {
        document.getElementById("error2").innerHTML="**only 11 digit rquired";
        return false;
    }
    var x= document.getElementById("n").value;
    var m= "!~@#$%^&*(){}-=+[]|.:";
    if(x.length<=2)
    {
       document.getElementById("Message").innerHTML="**Name must have more than 2 char";
        return false;
    }
    for(var i=0;i<x.length;i++)
    {
        if(m.indexOf(x.charAt(i))!=-1)
        {
           document.getElementById("Message").innerHTML="**Don't use special char";
           return false;
        }
    }
    var email = document.getElementById("email").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!filter.test(email))
    {
        document.getElementById("error").innerHTML="**enter the valid email";
        return false;
    }
    var num = document.getElementById("num").value;
    if(num.length!=10)
    {
        document.getElementById("numloc").innerHTML="**Mobile no must be of 10 digit";
        return false;
    }
}



