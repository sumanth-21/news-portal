
// jason part
var happeningnow = new XMLHttpRequest();
var inf;
var url = "https://news-portal-apr2020.firebaseio.com/happening-now.json";
happeningnow.open('GET',url,true);
happeningnow.responseType = 'text';
happeningnow.send(null);

happeningnow.onload = function() {
  if (happeningnow.status === 200) {
    inf = JSON.parse(happeningnow.responseText);
    console.log(inf);
    display(0)
  }
}

var s = 0;
//console.log(s)
function display(x) {
  s = (s+x) % 12;
  if(s < 0) {
    s = 0;
  }
  //console.log(x);
  //console.log(s);
  for ( i=1; i<=2; i++) {
      
    document.getElementById('place'+i).innerHTML = inf.large[s+i].category;
    document.getElementById('titl'+i).innerHTML = inf.large[s+i].title;
    document.getElementById('titl'+i).style.textAlign = "left";
    document.getElementById(`photo${i}`).src = inf.large[s+i].img;
    document.getElementById('des'+i).innerHTML = inf.large[s+i].description;
    document.getElementById('time'+i).innerHTML = inf.large[s+i].time;
  }
  for(i=1; i<=3; i++) {

    document.getElementById('title'+i).innerHTML = inf.small[s+(i-1)].title;
    document.getElementById('pic'+i).src = inf.small[s+(i-1)].img;
    document.getElementById('author'+i).innerHTML = inf.small[s+(i-1)].author;
    document.getElementById('tim'+i).innerHTML=inf.small[s+(i-1)].time;
    document.getElementById('author'+i).href = inf.small[s+(i-1)].url;
  }
  
}
