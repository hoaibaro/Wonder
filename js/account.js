var account = [
  {
    id: 1,
    username: "admin",
    password: 123,
  },
];
var id = account[0].id;

function check_password() {
  let val = document.getElementById("password").value.trim();
  if (val !== "") {
    document.getElementById("passwordError").innerHTML = "";
    return true;
  } else {
    document.getElementById("passwordError").className = "col-12 text-center";
    document.getElementById("passwordError").innerHTML =
      "Password must not be empty";
    return false;
  }
}
function check_mail() {
  let regex = /^[a-zA-Z0-9]/gi;
  let val = document.getElementById("username").value;
  if (regex.test(val)) {
    document.getElementById("emailError").innerHTML = "";
    return true;
  } else {
    document.getElementById("emailError").className = "col-12 text-center";
    document.getElementById("emailError").innerHTML = "Mail is not valid";
    return false;
  }
}

function check_username() {
  let regex = /^[a-zA-Z0-9]/gi;
  let val = document.getElementById("username").value;
  if (regex.test(val)) {
    document.getElementById("usernameError").innerHTML = "";
    return true;
  } else {
    document.getElementById("usernameError").className = "col-12 text-center";
    document.getElementById("usernameError").innerHTML =
      "Username is not valid";
    return false;
  }
}

function check_name() {
  let regex = /^[a-zA-Z0-9]/gi;
  let val = document.getElementById("name").value;
  if (regex.test(val)) {
    document.getElementById("nameError").innerHTML = "";
    return true;
  } else {
    document.getElementById("nameError").className = "col-12 text-center";
    document.getElementById("nameError").innerHTML = "Name is not valid";
    return false;
  }
}

function createUser(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email");
  id += 1;
  const newUsername = { id, email, username, password };
  account.push(newUsername);
}
function signup(e) {
  e.preventDefault();
  var tenDN = document.frmsignup.UN.value;
  if (tenDN == "") {
    document.getElementById("UN404").innerHTML =
      "* Username is empty or invalid";
  }

  var mk = document.frmsignup.PW.value;
  if (mk == "") {
    document.getElementById("PW404").innerHTML =
      "* Password is empty or invalid";
  }
  var mail = document.frmsignup.E.value;
  if (check_name() && check_username() && check_password() && check_mail()) {
    id += 1;
    const newUser = { id, email, username, password };
    account.push(newUser);
    location.href = "signin.html";
  }
}
