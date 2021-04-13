/**
 * Author: TA Digital
 */
var content;
var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
var url = "https://news-portal-apr2020.firebaseio.com/hero-slider.json";
oXHR.open('GET', url ,true);
oXHR.responseType = 'text';
oXHR.send(null);

oXHR.onload = function() {
  if (this.status === 200) {
  content = JSON.parse(this.responseText);
    console.log(content);
    produce(0);
  }
}
function produce(show) {
    document.getElementsByClassName("hero-image")[0].src = content[show]["hero-image"];
    document.getElementsByClassName('hero-category')[0].innerHTML = content[show].category;
    document.getElementsByClassName('hero-title')[0].innerHTML = content[show].title;
    document.getElementsByClassName('hero-description')[0].innerHTML = content[show].description;
    document.getElementsByClassName('hero-button')[0].innerHTML = content[show].cta.label;
}