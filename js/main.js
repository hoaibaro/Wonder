const user = localStorage.getItem("isLogin");
if (user) {
  // User is logged in, go to profile page
  document.querySelector(".user").href = "Information.html";
} else {
  // User not logged in, go to sign in page
  document.querySelector(".user").href = "Signin.html";
}
var account = JSON.parse(localStorage.getItem("accounts")) || [];

var id = account[0].id || 0;
MicroModal.init();
AOS.init({
  duration: 1200,
  once: true,
});
$(document).ready(function () {
  $(".homepage-image-slider").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 1600,
    arrows: true,
    pauseOnHover: false,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow pull-left'><i style = 'font-size:20px'class='ti-angle-left' aria-hidden='false'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow pull-right'><i style = 'font-size:20px' class='ti-angle-right' aria-hidden='false'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          infinite: true,
        },
      },
    ],
  });
  $(".homepage-list-item").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    easing: "ease-in-out-cubic",
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow pull-left'><i style = 'font-size:20px' class='ti-angle-left' aria-hidden='false'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow pull-right'><i style = 'font-size:20px' class='ti-angle-right' aria-hidden='false'></i></button>",
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
  });
});

function check_email() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let val = document.getElementById("email").value;
  if (regex.test(val) || val.trim() == "") {
    document.getElementById("erremail").innerHTML = "";
    return true;
  } else {
    document.getElementById("erremail").className = "col-12 text-center";
    document.getElementById("erremail").innerHTML = "Email is not valid";
    return false;
  }
}

// for product detail
function showDetail(ID) {
  let val = document.getElementById(ID);
  if (val.style.display === "none") {
    val.style.display = "block";
    document.getElementById("arrowD").className = "fa-solid fa-chevron-up";
  } else {
    val.style.display = "none";
    document.getElementById("arrowD").className = "fa-solid fa-chevron-down";
  }
}

function showShipping(ID) {
  let val = document.getElementById(ID);
  if (val.style.display === "none") {
    val.style.display = "block";
    document.getElementById("arrowS").className = "fa-solid fa-chevron-up";
  } else {
    val.style.display = "none";
    document.getElementById("arrowS").className = "fa-solid fa-chevron-down";
  }
}
// for sign up

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

function signup(e) {
  e.preventDefault();
  var username = document.frmsignup.UN.value;
  if (username == "") {
    document.getElementById("UN404").innerHTML =
      "* Username is empty or invalid";
  }

  var password = document.frmsignup.PW.value;
  if (password == "") {
    document.getElementById("PW404").innerHTML =
      "* Password is empty or invalid";
  }
  var email = document.frmsignup.E.value;
  if (check_name() && check_username() && check_password() && check_mail()) {
    id += 1;
    const newUser = { id, email, username, password };
    account.push(newUser);
    localStorage.setItem("accounts", JSON.stringify(account));
    location.href = "signin.html";
  }
}

// for signin

function signin_ktra(e) {
  e.preventDefault();
  var tenDN = document.frmlogin.UN.value;
  if (tenDN == "") {
    document.getElementById("UN404").innerHTML =
      "* Username is empty or invalid";
  }

  var mk = document.frmlogin.PW.value;
  if (mk == "") {
    document.getElementById("PW404").innerHTML =
      "* Password is empty or invalid";
  }
  if (tenDN == "" || mk == "") {
    // return false;
  }

  logIn(tenDN, mk);
  // return true;
}
function logIn(username, password) {
  let flag = false;
  let email;
  account.forEach((user) => {
    if (user.username === username && user.password === password) {
      flag = true;
      email = user.email;
    }
  });
  if (flag) {
    localStorage.setItem("isLogin", true);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    window.location.href = "index.html";
  } else {
    alert("invalid credentials");
  }
  return;
}

$(document).ready(function () {
  $(".dropdown ").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu ");
    if (dropdownMenu.is(":visible ")) {
      dropdownMenu.parent().toggleClass("open ");
    }
  });
});
$(document).on("scroll", function () {
  if ($(window).scrollTop() > 30) {
    $("#header").addClass("header-change");
  } else {
    $("#header").removeClass("header-change");
  }
});
