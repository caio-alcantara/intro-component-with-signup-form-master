const firstName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;
const emailAdress = document.querySelector("#emailAdress").value;
const password = document.querySelector("#password").value;
const button = document.querySelector("#btn");

function validateEmail() {
  let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailAdress.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function validatePassword() {
  let regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";

  if (password.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function stringContainsNumber(_string) {
  return /\d/.test(_string);
}

button.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(firstName);
  console.log(lastName);
  console.log(emailAdress);
  console.log(password);
});
