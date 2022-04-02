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

  if (stringContainsNumber(firstName) === true || firstName.length == 0) {
    let firstNameStyle = document.querySelector("#firstName");
    firstNameStyle.style = "border: 1px solid red;";
    document.getElementsByName("firstName")[0].placeholder = "";
    document.getElementById("firstName-error-icon").style = "display: block;";
    document.getElementById("firstName-error-message").style =
      "display: block;";
  } else {
    document.getElementById("firstName-error-icon").style = "display: none;";
    document.getElementById("firstName-error-message").style = "display: none;";
    let firstNameStyle = document.querySelector("#firstName");
    firstNameStyle.style = "border: 1px solid green;";
  }

  if (stringContainsNumber(lastName) === true || lastName.length == 0) {
    let lastNameStyle = document.querySelector("#lastName");
    lastNameStyle.style = "border: 1px solid red;";
    document.getElementsByName("lastName")[0].placeholder = "";
    document.getElementById("lastName-error-icon").style = "display: block;";
    document.getElementById("lastName-error-message").style = "display: block;";
  } else {
    document.getElementById("lastName-error-icon").style = "display: none;";
    document.getElementById("lastName-error-message").style = "display: none;";
    let lastNameStyle = document.querySelector("#lastName");
    lastNameStyle.style = "border: 1px solid green;";
  }

  if (validateEmail() === false) {
    let emailStyle = document.querySelector("#emailAdress");
    emailStyle.style = "border: 1px solid red;";
    document.getElementsByName("emailAdress")[0].placeholder =
      "email@example.com";
    document.getElementsByName("emailAdress")[0].placeholder.style =
      "color: red;";
    document.getElementById("emailAdress-error-icon").style = "display: block;";
    document.getElementById("emailAdress-error-message").style =
      "display: block;";
  } else {
    document.getElementById("emailAdress-error-icon").style = "display: none;";
    document.getElementById("emailAdress-error-message").style =
      "display: none;";
    let emailStyle = document.querySelector("#emailAdress");
    emailStyle.style = "border: 1px solid green;";
  }

  if (validatePassword() === false) {
    let passwordStyle = document.querySelector("#password");
    passwordStyle.style = "border: 1px solid red;";
    document.getElementsByName("password")[0].placeholder = "";
    document.getElementById("password-error-icon").style = "display: block;";
    document.getElementById("password-error-message").style = "display: block;";
  } else {
    document.getElementById("password-error-icon").style = "display: none;";
    document.getElementById("password-error-message").style = "display: none;";
    let passwordStyle = document.querySelector("#password");
    passwordStyle.style = "border: 1px solid green;";
  }
});
