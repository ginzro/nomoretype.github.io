charset="utf-8"

var count = 0;
function rare() {
  if(count < 5) {
    count++;
    console.log("more click!");
  } else {
    var change = document.getElementById('alert');
    change.innerHTML = "暇人ですか？";
  }
}
