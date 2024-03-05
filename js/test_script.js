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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  });
  $(".homepage-item-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    easing: "ease-in-out-cubic",
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow pull-left'><i style = 'font-size:20px'class='ti-angle-left' aria-hidden='false'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow pull-right'><i style = 'font-size:20px' class='ti-angle-right' aria-hidden='false'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".product-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    easing: "ease-in-out-cubic",
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow pull-left'><i style = 'font-size:20px'class='ti-angle-left' aria-hidden='false'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow pull-right'><i style = 'font-size:20px' class='ti-angle-right' aria-hidden='false'></i></button>",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        },
      },
    ],
  });
});

AOS.init({
  duration: 1200,
});
ScrollReveal({
  distance: "60px",
  duration: 2000,
});
ScrollReveal().reveal(".homepage-slider-information", {
  delay: 1600,
  origin: "left",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".homepage-bestseller-item", {
  delay: 1000,
  origin: "top",
  easing: "ease",
  duration: 1200,
});
// for product detail
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
function signup_ktra() {
  let kt = true;
  let ten = document.frmsignup.N.value;
  let tenDN = document.frmsignup.UN.value;
  let email = document.frmsignup.E.value;
  let pass = document.frmsignup.PW.value;
  let regextenDN = /^(([a-z]+)|([0-9]+)).*$/;
  let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  if (tenDN.length < 4 || tenDN.length > 15) {
    document.getElementById("UN404").innerHTML =
      "Username must have at least 4 characters";
    kt = false;
  } else if (!tenDN.match(regextenDN)) {
    document.getElementById("UN404").innerHTML =
      "Username must not contain uppercase and special character";
    kt = false;
  }

  if (pass.length <= 5 || pass.length >= 10) {
    document.getElementById("PW404").innerHTML =
      "Password must between 6 to 10 characters";
    kt = false;
  } else if (!pass.match(regexpass)) {
    document.getElementById("PW404").innerHTML =
      "Password must contain uppercase, normalcase characters and number";
    kt = false;
  }

  if (!kt) return false;
}
// for signin
function signin_ktra() {
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
    return false;
  }
  return true;
}
