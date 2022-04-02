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
  let regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"; // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
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
  }

  if (validateEmail() === false) {
    alert("oi");
  }

  if (validatePassword() === false) {
    alert("oi");
  }
});
