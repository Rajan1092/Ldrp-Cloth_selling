    function validate(){
        

        var x = document.forms["myForm"]["usrid"].value;
        var y = document.forms["myForm"]["psswrd"].value;

        if (x == "LDRP" && y == "1092")
        {
            alert("Welcome to my website");
            return true;
        }
        else if (x == "LDRP" || (y != "1092" && y != ""))
        {
            alert("Please check Password");
            return false;
        }
        else if ((x != "LDRP" && x != "") || y == "1092")
        {
            alert("Please check Username");
            return false;
        }
        else{
          alert("Enter the required field(s)");
          return false;
        }
    }
