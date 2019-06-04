
$(document).ready(function()  {



  $.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=AX9WrCkB86gCFPPYAXIGoFGBFOfGe8tk', function(nyt) {

    var i;
    for (i = 0; i < 4; i++) { 
    console.log(i);
   
    let item = i;
    let section = nyt.results[i].section;
    let byline = nyt.results[i].byline;
    let title = nyt.results[i].title;
    let imgurl = `<img src="${nyt.results[i].thumbnail_standard}" />`;

       

    var j;
    for (j = 0; j < 4; j++) { 
    $(`.item${j}`).append(j);
    $('.section').html(section);
    $('.byline').html(byline);
    $('.title').html(title);
    $('.img').html(imgurl);

    };



  console.log(i);
  console.log(section);
  console.log(title);
  console.log(byline);
  console.log(imgurl);


 };


//  console.log(object.payload.user.name);
 



  //   let city = getweather.name;
  //   let kelvin = getweather.main.temp;
  //   let celsius = Math.floor(kelvin - 273);
  //   let farenheit = Math.floor((kelvin - 273.15) * 9/5 + 32);


  //     $('.city').html(city);
  //     $('.temp').html(kelvin);
  //     $('.farenheit').html(farenheit);
    
  //     console.log(`the city is ${city}, kelvin is ${kelvin}, celsius is ${celsius} and farenheit is ${farenheit}`);

  //   });   
    
 });

});


