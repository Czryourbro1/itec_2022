let loginQuadrant = document.getElementById("login_quadrant");
let loginEMailInput = document.getElementById("login_email");
let loginPassInput = document.getElementById("login_password");
let loginLoginSubmit = document.getElementById("login_login_button");
let loginTitle = document.getElementById("login_title");
let loginMotto = document.getElementById("login_motto");
let loginBackground = document.getElementById("login_background");
let loginAccount = document.getElementById("account_button");

let resX = window.innerWidth,
  resY = window.innerHeight;

function onStartonResize() {
  resX = window.innerWidth;
  resY = window.innerHeight;

  loginTitle.style.fontSize = resY * (1 / 4 - (2 * 1) / 10) + "px";
  if (parseFloat(loginTitle.style.fontSize) < 35)
    loginTitle.style.fontSize = "35px";
  loginTitle.style.marginLeft = (resX - loginTitle.offsetWidth) / 2 + "px";
  loginTitle.style.marginTop = resY / 10 + "px";

  loginMotto.style.fontSize =
    (parseFloat(loginTitle.style.fontSize) * 2) / 3 + "px";
  if (parseFloat(loginMotto.style.fontSize) < 25)
    loginMotto.style.fontSize = "25px";
  loginMotto.style.marginLeft = (resX - loginMotto.offsetWidth) / 2 + "px";
  loginMotto.style.marginTop =
    parseFloat(loginTitle.style.marginTop) + (3 / 4) * resY + "px";

  loginQuadrant.style.width = resX / 2 + "px";
  loginQuadrant.style.height = resY / 2 + "px";
  if (parseFloat(loginQuadrant.style.height) < 350)
    loginQuadrant.style.height = "350px";
  loginQuadrant.style.marginLeft =
    (resX - parseFloat(loginQuadrant.style.width)) / 2 + "px";
  loginQuadrant.style.marginTop =
    (resY - parseFloat(loginQuadrant.style.height)) / 2 + "px";

  loginEMailInput.style.paddingLeft =
    ((98 / 100) * parseFloat(loginQuadrant.style.width) * 2) / 100 + "px";
  loginEMailInput.style.width =
    (98 / 100) * parseFloat(loginQuadrant.style.width) -
    parseFloat(loginEMailInput.style.paddingLeft) +
    "px";
  loginEMailInput.style.height =
    ((parseFloat(loginQuadrant.style.height) / 2) * (1 - (2 / 100) * 3)) / 3 +
    "px";
  loginEMailInput.style.marginLeft =
    (parseFloat(loginQuadrant.style.width) * 1) / 100 + "px";
  loginEMailInput.style.marginTop =
    (parseFloat(loginQuadrant.style.height) * 2) / 100 + "px";
  loginEMailInput.style.fontSize =
    (parseFloat(loginEMailInput.style.height) * 4) / 10 + "px";

  loginPassInput.style.paddingLeft =
    ((98 / 100) * parseFloat(loginQuadrant.style.width) * 2) / 100 + "px";
  loginPassInput.style.width =
    (98 / 100) * parseFloat(loginQuadrant.style.width) -
    parseFloat(loginPassInput.style.paddingLeft) +
    "px";
  loginPassInput.style.height =
    ((parseFloat(loginQuadrant.style.height) / 2) * (1 - (2 / 100) * 3)) / 3 +
    "px";
  loginPassInput.style.marginLeft =
    (parseFloat(loginQuadrant.style.width) * 1) / 100 + "px";
  loginPassInput.style.marginTop =
    (2 * parseFloat(loginQuadrant.style.height) * 2) / 100 +
    parseFloat(loginEMailInput.style.height) +
    "px";
  loginPassInput.style.fontSize =
    (parseFloat(loginPassInput.style.height) * 4) / 10 + "px";

  loginAccount.style.fontSize =
    (2 / 100) * parseFloat(loginQuadrant.style.width) + "px";
  if (parseFloat(loginAccount.style.fontSize) > 25)
    loginAccount.style.fontSize = "25px";
  if (parseFloat(loginAccount.style.fontSize) < 10)
    loginAccount.style.fontSize = "10px";
  loginAccount.style.marginLeft =
    parseFloat(loginPassInput.style.marginLeft) +
    (1 / 100) * parseFloat(loginQuadrant.style.width) +
    "px";
  loginAccount.style.marginTop =
    parseFloat(loginPassInput.style.marginTop) +
    parseFloat(loginPassInput.style.height) +
    (2 / 100) * parseFloat(loginQuadrant.style.height) +
    "px";

  /*loginPlaceholderEMail.style.fontSize =
    (2 / 100) * parseFloat(loginQuadrant.style.width) + "px";
  if (parseFloat(loginPlaceholderEMail.style.fontSize) > 25)
    loginPlaceholderEMail.style.fontSize = "25px";
  if (parseFloat(loginPlaceholderEMail.style.fontSize) < 10)
    loginPlaceholderEMail.style.fontSize = "10px";
  loginPlaceholderEMail.style.marginLeft =
    parseFloat(loginEMailInput.style.marginLeft) +
    parseFloat(loginEMailInput.style.paddingLeft) +
    "px";
  loginPlaceholderEMail.style.marginTop =
    parseFloat(loginEMailInput.style.marginTop) +
    (parseFloat(loginEMailInput.style.height) -
      loginPlaceholderEMail.offsetHeight) /
      2 +
    "px";

  loginPlaceholderPass.style.fontSize =
    (2 / 100) * parseFloat(loginQuadrant.style.width) + "px";
  if (parseFloat(loginPlaceholderPass.style.fontSize) > 25)
    loginPlaceholderPass.style.fontSize = "25px";
  if (parseFloat(loginPlaceholderPass.style.fontSize) < 10)
    loginPlaceholderPass.style.fontSize = "10px";
  loginPlaceholderPass.style.marginLeft =
    parseFloat(loginPassInput.style.marginLeft) +
    parseFloat(loginPassInput.style.paddingLeft) +
    "px";
  loginPlaceholderPass.style.marginTop =
    parseFloat(loginPassInput.style.marginTop) +
    (parseFloat(loginPassInput.style.height) -
      loginPlaceholderPass.offsetHeight) /
      2 +
    "px";
*/
  loginLoginSubmit.style.width =
    (1 / 10) * parseFloat(loginQuadrant.style.width) + "px";
  if (parseFloat(loginLoginSubmit.style.width) < 80)
    loginLoginSubmit.style.width = "80px";
  loginLoginSubmit.style.height =
    (1 / 10) * parseFloat(loginQuadrant.style.height) + "px";
  loginLoginSubmit.style.fontSize =
    (2 / 5) * parseFloat(loginLoginSubmit.style.height) + "px";
  loginLoginSubmit.style.marginTop =
    (90 / 100) * parseFloat(loginQuadrant.style.height) -
    loginLoginSubmit.offsetHeight +
    "px";
  loginLoginSubmit.style.marginLeft =
    (parseFloat(loginQuadrant.style.width) - loginLoginSubmit.offsetWidth) / 2 +
    "px";
}

onStartonResize();

loginEMailInput.value = "";
loginPassInput.value = "";

window.addEventListener("resize", function () {
  onStartonResize();
});
