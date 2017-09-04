charset="utf-8"

var count = 0;
function rare() {
  if(count < 4) {
    count++;
    console.log("more click!");
  } else {
    var change = document.getElementById("profile_icon");
    change.src = "img/sercret.png";
    console.log("Congratulations!");
  }
}
