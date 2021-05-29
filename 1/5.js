function urlData() {
  console.log("full url adress: " + location.href);
  console.log("host name: " + location.hostname);
  console.log("used protocol: " + location.protocol);
  console.log("requestParams: " + location.search);
}
urlData();

function reloadPage() {
  location.reload();
}
reloadPage();

function redirectPage(adress) {
  location.assign(adress);
}
redirectPage("https://www.google.com/");
