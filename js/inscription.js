function verif() {
  var verified = 1;
  var name = document.getElementById("name");
  var prename = document.getElementById("prename");
  if (!name.value) {
    verified = 0;
  }
  if (!prename.value) {
    verified = 0;
  }
  if (verified == 0) {
    alert("not verified");
  }
}