var slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName('slide');
    var arrows = document.getElementsByClassName('arrow');    
    var len = slides.length;

	if (n > len) {slideIndex = len; }  
    if (n < 1) {slideIndex = 1; }
    if (slideIndex == len) {arrows[1].style.fill = "#A6ADB4"; }else {arrows[1].style.fill = "#202124"; }
    if (slideIndex == 1) {arrows[0].style.fill = "#A6ADB4"; }else {arrows[0].style.fill = "#202124"; }    

	for (var i = 0; i < len; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "grid";
}

var xhr = new XMLHttpRequest();
var url = " https://news-portal-apr2020.firebaseio.com/more-news.json";
xhr.open('GET', url, true);
xhr.onload = function() {
	if(this.status == 200) {
        var i = 0;
        var article = JSON.parse(this.responseText);
        var output = '';
        while (i < article.length){
            output += '<div class="slide">' ;				
            var j = 2;
            while (j > 0 && i < article.length){
                output += 			
                    '<div class="article-wrapper">' +
                    '<div class="article-category">' +
                    '<h4>' + article[i].category + '</h4>' +
                    '</div>' +
                    '<div class="article-content">' +
                    '<h4>' + article[i].title + '</h4>' +
                    '<p>' + article[i].description + '</p>' +
                    '<div class="time">' +
                    '<img src="images/time.svg"> <p>' + article[i].time + '</p>' + 
                    '</div>' +
                    '</div>' +
                    '</div>';
                    j--;
                    i++;
            }
            output += '</div>';            
        }        
        document.getElementsByClassName('articles-wrapper')[0].innerHTML = output;
        showSlides(slideIndex);
    }
}
xhr.send();