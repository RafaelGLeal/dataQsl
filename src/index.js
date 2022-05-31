// Images
import bgHero from "./assets/BG-hero.png";
import bgNavigation from "./assets/Vector.png";
import mock1 from "./assets/ww.png";
import dots from "./assets/DotGrid.png";
import profilePhoto from "./assets/profilepic.png";
//Svg
import logoBlack from "./assets/logo.svg";
import logoWhite from "./assets/logo-white.svg";
import jsLogo from "./assets/javascript.svg";
import phpLogo from "./assets/php.svg";
import laravelLogo from "./assets/laravel.svg";
import vueLogo from "./assets/vue.svg";
//Scripts
import loader from "./script/loader";
import toggleMode from "./script/toggleDark";
import "./style/main.scss";

const logo = document.getElementById("brandLogo");
const logoMode = document.getElementById("brandLogoWhite");
const bgNavbar = document.getElementById("bgNav");
const hero = document.getElementById("bgHero");
const mockupProject1 = document.querySelectorAll(".img-1");
const dotGrid = document.querySelectorAll(".svg-dot");
const profile = document.getElementById("profile-photo");
const logoSlider = document.querySelector(".logo-slide").children;
const logoArray = [jsLogo, phpLogo, laravelLogo, vueLogo];

dotGrid.forEach((img) => {
  img.src = dots;
});
mockupProject1.forEach((img) => {
  img.src = mock1;
});
profile.src = profilePhoto;
logoMode.src = logoWhite;
logo.src = logoBlack;
bgNavbar.src = bgNavigation;
hero.src = bgHero;
logoSlider[0].src = logoArray[0];
logoSlider[1].src = logoArray[1];
logoSlider[2].src = logoArray[2];
logoSlider[3].src = logoArray[3];

loader();
toggleMode();
