var slideindex = 1;
// Next/previous controls

// jason part

var text;
var url = 'https://news-portal-apr2020.firebaseio.com/trending.json';

var news = new XMLHttpRequest();
news.open('GET', url ,true);
news.responseType = 'text';
news.send(null);

news.onload = function() {
  if (news.status === 200) {
    text = JSON.parse(news.responseText);
    console.log(text);
    show(0);
  }
}

var index = -1;
function show(x) {
  var count = Object.keys(text).length;
  index = (index + x) % count;

  for ( i=1; i<=count; i++) {
    document.getElementById('image'+i).src =  text[index + i]["trending-image"];
    document.getElementById('news'+i).innerHTML = text[index + i].title;
    document.getElementById('content'+i).innerHTML = text[index + i].description;
    document.getElementById('timestamp'+i).innerHTML = text[index + i].time;
  }
  }