let number = 0;
function counter(){
    number++; 
    document.getElementById("clicks").innerHTML = number;
    console.log(number);
}
function myFunction() {
    alert('Time is up! your clicks: ' + number);
  }