// Latest News Section
var latestNews = new XMLHttpRequest();
var lObj;
var arrLength;
var url = 'https://news-portal-apr2020.firebaseio.com/latest_news.json';

latestNews.open('GET', url, true);
latestNews.responseType = 'text';
latestNews.send();

latestNews.onload = function() {
    if (latestNews.status == 200) {
        lObj = JSON.parse(latestNews.responseText);
        console.log(lObj);

        arrLength = lObj.responds.length;
        
        // Fetching the data from json which contains the latest news
        document.getElementById('header').innerHTML = lObj.left_column.quote;
        document.getElementById('leftcontent').innerHTML = lObj.left_column.description_1;
        document.getElementById('rightcontent').innerHTML = lObj.left_column.description_2;
        document.getElementById('title').innerHTML = lObj.left_column.subtitle;
        document.getElementById('time').innerHTML = lObj.time;

        // Fetching the data using the indexes of array which contains the latest news
        document.getElementById('author-img-1').src = lObj.responds[arrLength - 1].author.author_icon;
        document.getElementById('author-img-1').alt = 'author-img';
        document.getElementById('latest-news-author-name-1').innerHTML = lObj.responds[arrLength - 1].author.name;
        document.getElementById('latest-news-description-1').innerHTML = lObj.responds[arrLength - 1].description;
        document.getElementById('publish-time-1').innerHTML = lObj.responds[arrLength - 1].time;

        document.getElementById('author-img-2').src = lObj.responds[arrLength - 2].author.author_icon;
        document.getElementById('author-img-2').alt = 'author-img';
        document.getElementById('latest-news-author-name-2').innerHTML = lObj.responds[arrLength - 2].author.name;
        document.getElementById('latest-news-description-2').innerHTML = lObj.responds[arrLength - 2].description;
        document.getElementById('publish-time-2').innerHTML = lObj.responds[arrLength - 2].time;

        document.getElementById('author-img-hero-header').src = lObj.responds[arrLength - 2].author.author_icon;
    }
};

//Video Component
var isVideoPlaying = false;
var vid = document.getElementsByClassName("myVideo")[0];
var button1 = document.getElementsByClassName("button1")[0];
function playVid() { 
  if(!isVideoPlaying){
    vid.play(); 
    isVideoPlaying = true;
    button1.innerHTML = "&#10074;&#10074;";
  }
  else {
    vid.pause();
    isVideoPlaying = false;
    button1.innerHTML = "&#9658;";
  }
} 

var vidButton = document.getElementById('vid');
vidButton.addEventListener('click',function(e) {
  playVid();
});

// /Latest News Section