function calculateAge() {
  var dobInput = document.getElementById("dob").value;

  if (dobInput) {
    var dob = new Date(dobInput);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    document.getElementById("result").innerHTML =
      "Your age is: " + age + " years";
  } else {
    alert("Please enter your date of birth.");
  }
}
