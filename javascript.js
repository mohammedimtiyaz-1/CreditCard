function cardinput() {
  var input_feild = document.querySelector(".dpf-input").value;

  if (isNaN(input_feild) && input_feild.lenght != 0) {
    document.getElementById("cardinput").style.display = "block";
  } else {
    document.getElementById("cardinput").style.display = "none";
  }
}

function expireinput() {
  var input_feild2 = document.querySelector(".expire").value;

  if (
    (isNaN(input_feild2) && !input_feild2.includes("/")) ||
    input_feild2.length > 5
  ) {
    document.getElementById("expireinput").style.display = "block";
  } else {
    document.getElementById("expireinput").style.display = "none";
  }
}

function veficationinput() {
  var input_feild3 = document.querySelector(".verify").value;

  if (isNaN(input_feild3) || input_feild3.length > 4) {
    document.getElementById("verificationinput").style.display = "block";
  } else {
    document.getElementById("verificationinput").style.display = "none";
  }
}
