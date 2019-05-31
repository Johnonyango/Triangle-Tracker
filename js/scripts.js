function triangle() {
var a =parseInt(document.getElementById("a").value);
var b =parseInt(document.getElementById("b").value);
var c =parseInt(document.getElementById("c").value);

  if (a===b && b===c && c===b) {
    alert("equilateral triangle")
  }

   else if(b===c && b + c > a|| a===b && a + b > c|| a===c && a + c > b|| c===a && c + a > b){
      alert("isosceless triangle");
  }

 else if (a + b <= c || a + c <= b || b+c<=a) {
        alert("not a triangle");

  }

  else if (a!==b && b!==c && a!==c && a+b > c && b + c > a) {
       alert("scalene  triangle");
    }
   else(alert("Please input value!"))




}
