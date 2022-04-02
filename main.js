function validateEmail() {
  let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let emailAdress = document.querySelector("#emailAdress").value;

  if (emailAdress.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function validatePassword() {
  let regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"; // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  let password = document.querySelector("#password").value;

  if (password.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function stringContainsNumber(_string) {
  return /\d/.test(_string);
}

const button = document.querySelector("#btn");

button.addEventListener("click", function (event) {
  event.preventDefault();

  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;

  if (
    stringContainsNumber(firstName) === true ||
    stringContainsNumber(lastName) === true
  ) {
    alert("oi");
    console.log("names")
  }

  if (validateEmail() === false) {
    alert("oi");
    console.log("email")
  }

  if (validatePassword() === false) {
    alert("oi");
    console.log("password")
  }
});
