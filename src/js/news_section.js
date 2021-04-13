                
$("#Selected_Category a").click(function(){ 
  $("#target").text($(this).text());
      $("#target1").text($(this).text());
});



//--------- Search By Date ----------------------------------------------------------------------------------------------------------------------------------------------------
var x;
var newDate;

var apiUrl = "https://news-portal-apr2020.firebaseio.com/category.json";
var submitClicked;
var keyResult;
var selectCategory;
var clickWorldNews = 0;
var clickTravel = 0;

function myFunction() {


    x = document.getElementById("date").value;
    var Selected_Category = $("#target1").text();
    selectCategory = Selected_Category;
    console.log(Selected_Category);
    if (Selected_Category == 'WORLD NEWS' || Selected_Category == 'World News') {

        newDate = x.toString().split("-").reverse().join("/");
        console.log(newDate);

        const matchlist = document.getElementById('match-list');




        const searchCategories = async searchText => {
            const res = await fetch(apiUrl);
            const categories = await res.json();
            //console.log(categories);
            let matches = categories.WORLD_NEWS.WORLD_NEWS_POSTS.filter(category => {
                const regex = new RegExp(`^${searchText}`, 'i');

                return category.publish_date.match(regex)
            });

            if (searchText.length == 0 || matches.length == 0) {
                matches = [];
                matchlist.innerHTML = '';
            }
            submitClicked = matches;
            keyResult = null;
            $(".list").html("");
            outputHtml1(matches);
            console.log(matches);

        };




        const outputHtml1 = matches => {
            document.getElementById('match-list').innerHTML = `  <div class="column1">
            <img src="${matches[0].author.author_icon}" alt="author_photo" id="avatar"/>
                <p id="authorinfo">${matches[0].author.name}</p>
        </div>
    
    <div class="column2">
        <p id="authorexcerpt">${matches[0].top_text}</p><i class="fa fa-clock-o"></i>
    <div id="time"><i>&nbsp;${matches[0].publish_time}</i></div>
    </div>
       <div class="line">
       </div>
               <div class="poster-wrapper"><img src="${matches[0].poster}" alt="poster" id="poster"/>
               </div>
        
        <div class="article-wrapper"><p id="articlecopy">${matches[0].bottom_text}</p>
        </div>
        <div class="articleemp-wrapper"><p id="articlecopyemp">${matches[0].bottom_quote}</p>
        </div> 
       
        <div class="line2"></div>
       
        <div id="pdate">${matches[0].publish_date}</div>`;
        splitter();

            if (submitClicked != null) {
                if (clickWorldNews != 0)
                    $('#list_item2').hide();
                if (submitClicked.length < 5) {
                    for (let index = 1; index <= submitClicked.length; index++) {
                        $("#list_item1").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                    }
                } else {
                    for (let index = 1; index < 5; index++) {
                        $("#list_item1").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                    }
                    for (let index = 5; index <= submitClicked.length; index++) {
                        $("#list_item1").append('<li class="num"><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                    }
                    $("#list_item1").append('<li class="next_pages" id="icon" onclick="pageNo()"><a ><img src="https://img.icons8.com/ios-filled/50/000000/ellipsis.png"/></a></li>');
                }
            }




        };



        searchCategories(newDate);


    }


    if (Selected_Category == 'Travel') {

        newDate = x.toString().split("-").reverse().join("/");
        console.log(newDate);

        const matchlist = document.getElementById('match-list');




        let searchCategories = async searchText => {
            const res = await fetch(apiUrl);
            const categories = await res.json();
            //console.log(categories);
            let matches = categories.TRAVEL.TRAVEL_POSTS.filter(category => {
                const regex = new RegExp(`^${searchText}`, 'i');

                return category.publish_date.match(regex)
            });

            if (searchText.length == 0 || matches.length == 0) {
                matches = [];
                matchlist.innerHTML = '';
            }

            submitClicked = matches;
            $(".list").html("");
            keyResult = null;
            outputHtml2(matches);
            console.log(matches);
            //    return matches;

        };


        const outputHtml2 = matches => {
            document.getElementById('match-list').innerHTML = `  <div class="column1">
            <img src="${matches[0].author.author_icon}" alt="author_photo" id="avatar"/>
                <p id="authorinfo">${matches[0].author.name}</p>
        </div>
    
    <div class="column2">
        <p id="authorexcerpt">${matches[0].top_text}</p><i class="fa fa-clock-o"></i>
    <div id="time"><i>&nbsp;${matches[0].publish_time}</i></div>
    </div>
       <div class="line">
       </div>
               <div class="poster-wrapper"><img src="${matches[0].poster}" alt="poster" id="poster"/>
               </div>
        
        <div class="article-wrapper"><p id="articlecopy">${matches[0].bottom_text}</p>
        </div>
        <div class="articleemp-wrapper"><p id="articlecopyemp">${matches[0].bottom_quote}</p>
        </div> 
       
        <div class="line2"></div>
       
        <div id="pdate">${matches[0].publish_date}</div>`;
        splitter();

            if (submitClicked != null) {
                if (clickTravel != 0)
                    $('#list_item3').hide();
                if (submitClicked.length < 5) {
                    for (let index = 1; index <= submitClicked.length; index++) {
                        $("#list_item1").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                    }
                } else {
                    for (let index = 1; index < 5; index++) {
                        $("#list_item1").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                    }
                    for (let index = 5; index <= submitClicked.length; index++) {
                        $("#list_item1").append('<li class="num"><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                    }
                    $("#list_item1").append('<li class="next_pages" id="icon" onclick="pageNo()"><a ><img src="https://img.icons8.com/ios-filled/50/000000/ellipsis.png"/></a></li>');
                }
            }



        };

        return searchCategories(newDate); //.then(token => {return token});

    }



}


//--------- Search By Keywords ----------------------------------------------------------------------------------------------------------------------------------------------------


$('#Selected_Category a').click(function() {
        var Selected_Category = $(this).text();
        selectCategory = Selected_Category;

        //if(submitClicked == null && keyResult == null){

        if (selectCategory == "WORLD NEWS" || selectCategory == "World News") {
            $(".list").html("");
           submitClicked = 0;
           keyResult = 0;
            if (clickWorldNews == 0) {
                if (clickTravel != 0)
                    $('#list_item3').hide();
                $.getJSON(apiUrl, function(data) {
                    var worldData = data.WORLD_NEWS.WORLD_NEWS_POSTS;
                    if (worldData.length < 5) {
                        for (let index = 1; index <= worldData.length; index++) {
                            $("#list_item2").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                    } else {
                        for (let index = 1; index < 5; index++) {
                            $("#list_item2").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                        for (let index = 5; index <= worldData.length; index++) {
                            $("#list_item2").append('<li class="num"><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                        $("#list_item2").append('<li class="next_pages" id="icon" onclick="pageNo()"><a ><img src="https://img.icons8.com/ios-filled/50/000000/ellipsis.png"/></a></li>');
                    }
                });

               // clickWorldNews++;
            } else {
                $('#list_item3').hide();
                $('#list_item2').show();
            }
        }

        if (selectCategory == "Travel") {
            $(".list").html("");
            keyResult = 0;
            submitClicked = 0;
            if (clickTravel == 0) {
                if (clickWorldNews != 0)
                    $('#list_item2').hide();
                $.getJSON(apiUrl, function(data) {
                    var travelData = data.TRAVEL.TRAVEL_POSTS;
                    if (travelData.length < 5) {
                        for (let index = 1; index <= travelData.length; index++) {
                            $("#list_item3").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                    } else {
                        for (let index = 1; index < 5; index++) {
                            $("#list_item3").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                        for (let index = 5; index <= travelData.length; index++) {
                            $("#list_item3").append('<li class="num"><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                        $("#list_item3").append('<li class="next_pages" id="icon" onclick="pageNo()"><a ><img src="https://img.icons8.com/ios-filled/50/000000/ellipsis.png"/></a></li>');
                    }

                });

              //  clickTravel++
            } else {

                $('#list_item2').hide();
                $('#list_item3').show();
            }
        }

        //}




        console.log(Selected_Category);

        if (Selected_Category == 'World News') {
            const search = document.getElementById('searchBar');

            const matchlist = document.getElementById('match-list');

            const list1 = document.getElementById('.list');

            const searchStates = async searchText => {
                const res = await fetch(apiUrl);
                const categories = await res.json();
                console.log(categories);
                let matches = categories.WORLD_NEWS.WORLD_NEWS_POSTS.filter(category => {
                    const regex = new RegExp(searchText, 'gi');

                    return category.author.name.match(regex) || category.publish_time.match(regex)
                });

                if (searchText.length == 0 || matches.length == 0) {
                    matches = [];
                    matchlist.innerHTML = '';
                }
                keyResult = matches;
                submitClicked = 0;
                $(".list").html("");
                outputHtml3(matches);
                console.log(matches);
                //  return matches;
            };


            const outputHtml3 = matches => {


                document.getElementById('match-list').innerHTML = `  <div class="column1">
                <img src="${matches[0].author.author_icon}" alt="author_photo" id="avatar"/>
                    <p id="authorinfo">${matches[0].author.name}</p>
            </div>
        
        <div class="column2">
            <p id="authorexcerpt">${matches[0].top_text}</p><i class="fa fa-clock-o"></i>
        <div id="time"><i>&nbsp;${matches[0].publish_time}</i></div>
        </div>
           <div class="line">
           </div>
                   <div class="poster-wrapper"><img src="${matches[0].poster}" alt="poster" id="poster"/>
                   </div>
            
            <div class="article-wrapper"><p id="articlecopy">${matches[0].bottom_text}</p>
            </div>
            <div class="articleemp-wrapper"><p id="articlecopyemp">${matches[0].bottom_quote}</p>
            </div> 
           
            <div class="line2"></div>
           
            <div id="pdate">${matches[0].publish_date}</div>`;
            splitter();

                if (keyResult != null) {
                    if (clickWorldNews != 0)
                        $('#list_item2').hide();
                    if (keyResult.length < 5) {
                        for (let index = 1; index < keyResult.length; index++) {
                            console.log(1);

                            $("#list_item4").append('<li><a href="#" onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                    } else {
                        for (let index = 1; index < 5; index++) {
                            console.log('2');

                            $("#list_item4").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                        for (let index = 5; index <= keyResult.length; index++) {
                            $("#list_item4").append('<li class="num"><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                        $("#list_item4").append('<li class="next_pages" id="icon" onclick="pageNo()"><a ><img src="https://img.icons8.com/ios-filled/50/000000/ellipsis.png"/></a></li>');
                    }
                }


            };

            searchBar.addEventListener('input', () => searchStates(search.value));
            //return searchStates(search.value);//.then(searchvalue => {return searchvalue});
        } else if (Selected_Category == 'Travel') {

            const search = document.getElementById('searchBar');

            const matchlist = document.getElementById('match-list');

            const searchStates = async searchText => {
                const res = await fetch(apiUrl);
                const categories = await res.json();
                console.log(categories);
                let matches = categories.TRAVEL.TRAVEL_POSTS.filter(category => {
                    const regex = new RegExp(searchText, 'gi');

                    return category.author.name.match(regex) || category.publish_time.match(regex)
                });

                if (searchText.length == 0 || matches.length == 0) {
                    matches = [];
                    matchlist.innerHTML = '';

                }
                keyResult = matches;
                submitClicked = 0;
                $(".list").html("");
                outputHtml4(matches);
                console.log(matches);
            };


            const outputHtml4 = matches => {
                document.getElementById('match-list').innerHTML = `  <div class="column1">
                <img src="${matches[0].author.author_icon}" alt="author_photo" id="avatar"/>
                    <p id="authorinfo">${matches[0].author.name}</p>
            </div>
        
        <div class="column2">
            <p id="authorexcerpt">${matches[0].top_text}</p><i class="fa fa-clock-o"></i>
        <div id="time"><i>&nbsp;${matches[0].publish_time}</i></div>
        </div>
           <div class="line">
           </div>
                   <div class="poster-wrapper"><img src="${matches[0].poster}" alt="poster" id="poster"/>
                   </div>
            
            <div class="article-wrapper"><p id="articlecopy">${matches[0].bottom_text}</p>
            </div>
            <div class="articleemp-wrapper"><p id="articlecopyemp">${matches[0].bottom_quote}</p>
            </div> 
           
            <div class="line2"></div>
           
            <div id="pdate">${matches[0].publish_date}</div>`;
            splitter();

                if (keyResult != null) {
                    if (clickTravel != 0)
                        $('#list_item3').hide();
                    if (keyResult.length < 5) {
                        for (let index = 1; index < keyResult.length; index++) {
                            $("#list_item4").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                    } else {
                        for (let index = 1; index < 5; index++) {
                            $("#list_item4").append('<li><a  onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                        for (let index = 5; index <= keyResult.length; index++) {
                            $("#list_item4").append('<li class="num"><a onclick="data(' + (index - 1) + ')">0' + index + '</a></li>');
                        }
                        $("#list_item4").append('<li class="next_pages" id="icon" onclick="pageNo()"><a><img src="https://img.icons8.com/ios-filled/50/000000/ellipsis.png"/></a></li>');
                    }
                }


            };

            searchBar.addEventListener('input', () => searchStates(search.value));

        }

    }

);




$(document).on('click', 'ul li', function() {
    $(this).not(".next_pages").addClass('active').siblings().removeClass('active');
});

function pageNo() {
    $("ul li.num").show();
    console.log(3);

    document.getElementById('icon').style.display = 'none';
}


function data(var1) {
    if (submitClicked != 0 ) {
        console.log(submitClicked);
        
        document.getElementById('match-list').innerHTML = `<div class="column1" >
                            <img src="${submitClicked[var1].author.author_icon} " alt="author_photo" id="avatar">
                            <p id="authorinfo">${submitClicked[var1].author.name}</p>
                        </div>
                        
                        <div class="column2">
                            <p id="authorexcerpt">${submitClicked[var1].top_text}</p>
                            <i class="fa fa-clock-o"></i>
                            <div id="time"></i>&nbsp;${submitClicked[var1].publish_time}</div>
                        </div> 
                        
                        <div class="line"></div>
                        
                        <div class="poster-wrapper">
                            <img src="${submitClicked[var1].poster}" alt="poster" id="poster">
                        </div>
                        
                        <div class="article-wrapper"><p id="articlecopy">${submitClicked[var1].bottom_text}</p>
                        </div>
                        <div class="articleemp-wrapper"><p id="articlecopyemp">${submitClicked[var1].bottom_quote}</p>
                        </div> 
                        
                        <div class="line2"></div>
                        <div id="pdate">${submitClicked[var1].publish_date}</div>`;
                        splitter();
    }

    if (keyResult != 0) {

        document.getElementById('match-list').innerHTML = `<div class="column1" >
                            <img src="${keyResult[var1].author.author_icon} " alt="author_photo" id="avatar">
                            <p id="authorinfo">${keyResult[var1].author.name}</p>
                        </div>
                        
                        <div class="column2">
                            <p id="authorexcerpt">${keyResult[var1].top_text}</p>
                            <i class="fa fa-clock-o"></i>
                            <div id="time"></i>&nbsp;${keyResult[var1].publish_time}</div>
                        </div> 
                        
                        <div class="line"></div>
                        
                        <div class="poster-wrapper">
                            <img src="${keyResult[var1].poster}" alt="poster" id="poster">
                        </div>
                        
                        <div class="article-wrapper"><p id="articlecopy">${keyResult[var1].bottom_text}</p>
                        </div>
                        <div class="articleemp-wrapper"><p id="articlecopyemp">${keyResult[var1].bottom_quote}</p>
                        </div> 
                        
                        <div class="line2"></div>
                        <div id="pdate">${keyResult[var1].publish_date}</div>`;
                        splitter();

    }
    if (submitClicked == 0 && keyResult == 0) {

        if (selectCategory == "WORLD NEWS" || selectCategory == "World News") {
            $.getJSON(apiUrl, function(data) {
                var worldData = data.WORLD_NEWS.WORLD_NEWS_POSTS;
                document.getElementById('match-list').innerHTML = `<div class="column1" >
                                    <img src="${worldData[var1].author.author_icon} " alt="author_photo" id="avatar">
                                    <p id="authorinfo">${worldData[var1].author.name}</p>
                                </div>
                                
                                <div class="column2">
                                    <p id="authorexcerpt">${worldData[var1].top_text}</p>
                                    <i class="fa fa-clock-o"></i>
                                    <div id="time"></i>&nbsp;${worldData[var1].publish_time}</div>
                                </div> 
                                
                                <div class="line"></div>
                                
                                <div class="poster-wrapper">
                                    <img src="${worldData[var1].poster}" alt="poster" id="poster">
                                </div>
                                
                                <div class="article-wrapper"><p id="articlecopy">${worldData[var1].bottom_text}</p>
                                </div>
                                <div class="articleemp-wrapper"><p id="articlecopyemp">${worldData[var1].bottom_quote}</p>
                                </div> 
                                
                                <div class="line2"></div>
                                <div id="pdate">${worldData[var1].publish_date}</div>`;
                                splitter();
            });
        }

        if (selectCategory == "Travel") {
            $.getJSON(apiUrl, function(data) {
                var travelData = data.TRAVEL.TRAVEL_POSTS;
                document.getElementById('match-list').innerHTML = ` <div class="column1" >
                                <img src="${travelData[var1].author.author_icon} " alt="author_photo" id="avatar">
                                <p id="authorinfo">${travelData[var1].author.name}</p>
                            </div>
                            
                            <div class="column2">
                                <p id="authorexcerpt">${travelData[var1].top_text}</p>
                                <i class="fa fa-clock-o"></i>
                                <div id="time"></i>&nbsp;${travelData[var1].publish_time}</div>
                            </div> 
                            
                            <div class="line"></div>
                            
                            <div class="poster-wrapper">
                                <img src="${travelData[var1].poster}" alt="poster" id="poster">
                            </div>
                            
                            <div class="article-wrapper"><p id="articlecopy">${travelData[var1].bottom_text}</p>
                            </div>
                            <div class="articleemp-wrapper"><p id="articlecopyemp">${travelData[var1].bottom_quote}</p>
                            </div> 
                            
                            <div class="line2"></div>
                            <div id="pdate">${travelData[var1].publish_date}</div>`;
                            splitter();
            });

        }

    }
}

function data1(var1){
    $.getJSON(apiUrl, function(data) {
         
        var worldData = data.WORLD_NEWS.WORLD_NEWS_POSTS;
        document.getElementById('match-list').innerHTML = `<div class="column1" >
                            <img src="${worldData[var1].author.author_icon} " alt="author_photo" id="avatar">
                            <p id="authorinfo">${worldData[var1].author.name}</p>
                        </div>
                        
                        <div class="column2">
                            <p id="authorexcerpt">${worldData[var1].top_text}</p>
                            <i class="fa fa-clock-o"></i>
                            <div id="time"></i>&nbsp;${worldData[var1].publish_time}</div>
                        </div> 
                        
                        <div class="line"></div>
                        
                        <div class="poster-wrapper">
                            <img src="${worldData[var1].poster}" alt="poster" id="poster">
                        </div>
                        
                        <div class="article-wrapper"><p id="articlecopy">${worldData[var1].bottom_text}</p>
                        </div>
                        
                        <div class="articleemp-wrapper"><p id="articlecopyemp">${worldData[var1].bottom_quote}</p>
                        </div> 
                        
                        <div class="line2"></div>
                        <div id="pdate">${worldData[var1].publish_date}</div>`;
                        splitter();
    });
   
    

}






function splitter(){
var text = $("#authorexcerpt").text();
    if(text != undefined){
          $("#authorexcerpt").empty();  
          var splitter = 'vestibulum.';
          var fields = text.split(splitter);

          document.getElementById("authorexcerpt").innerHTML = fields[0] + " " + splitter + "<br><br>" + fields[1];
    }

    
    var text2 = $("#articlecopy").text();
    if(text2 != undefined){ 
          $("#articlecopy").empty();
          var splitter2 = 'aliquam.';
          var fields2 = text2.split(splitter2);

          document.getElementById("articlecopy").innerHTML = fields2[0] + " " + splitter2 + "<br><br>" + fields2[1];
    }

}
splitter();