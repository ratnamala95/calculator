$(document).ready(() => {

  $('table').hide();

  $('.btn').on('click',() =>{
    $('.food').show();
    showData();
    $('.btn').hide();
  });
  $('.res').on('click', () => {
    $('.tab').show();
    $('.res').hide();
    restaurantList();
  });
});


function showData(){

  $.ajax({
    type:'GET',
    url:'xml/nutrition.xml',
    dataType:'xml',
    cache:'false',
    async:'false',
    error:function (e){
      alert('An error occured while reading xml file!');
      console.log('XML reading failed!',e);
    },
    success:function(response){
      // var xm = $.parseXML(response);

      $(response).find('daily-values').each(function (){
        var totalFat = 'Total-fat:' + $(this).find('total-fat').text();
        var saturatedFat = 'Saturated-fat:' + $(this).find('saturated-fat').text();
        var cholesterol = 'Cholesterol:' + $(this).find('cholesterol').text();
        var sodium = 'Sodium:' + $(this).find('sodium').text();
        var carb = 'Carb:' + $(this).find('carb').text();
        var fiber = 'Fiber:' + $(this).find('fiber').text();
        var protien = 'Protien:' + $(this).find('protien').text();

        $('ul').children().remove();

        $('ul').append('<li>'+totalFat+'</li>')
        $('ul').append('<li>'+saturatedFat+'</li>')
        $('ul').append('<li>'+cholesterol+'</li>')
        $('ul').append('<li>'+sodium+'</li>')
        $('ul').append('<li>'+carb+'</li>')
        $('ul').append('<li>'+fiber+'</li>')
        $('ul').append('<li>'+protien+'</li>')
      });


      // $('table').empty();
      $('.food').find('td').remove();

      $(response).find('food').each(function (){

        var name = $(this).find('name').text();
        var mfr = $(this).find('mfr').text();
        var serving = $(this).find('serving').text();
        var calories = $(this).find('calories').attr('total');
        var totalfat = $(this).find('total-fat').text();
        var saturatedfat = $(this).find('saturated-fat').text();
        var cholesterol = $(this).find('cholesterol').text();
        var sodium = $(this).find('sodium').text();
        var carb = $(this).find('carb').text();
        var fiber = $(this).find('fiber').text();
        var protein = $(this).find('protein').text();
        var vitamins = $(this).find('vitamins').text();
        var minerals = $(this).find('minerals').text();


        $('.food').append('<tr><td>'+name+
        '</td><td>'+mfr+
        '</td><td>'+serving+
        '</td><td>'+calories+
        '</td><td>'+totalfat+
        '</td><td>'+saturatedfat+
        '</td><td>'+cholesterol+
        '</td><td>'+sodium+
        '</td><td>'+carb+
        '</td><td>'+fiber+
        '</td><td>'+protein+
        '</td><td>'+vitamins+
        '</td><td>'+minerals+
        '</td></tr>');

      });
      // console.log(response);
    }

  });
}





/* Seattle restaurants */
function restaurantList(){

  alert('yayy!');
  $.ajax({
    type:'GET',
    url:'xml/restaurants.xml',
    dataType:'xml',
    cache:'false',
    error:function (e){
      alert('An error occured while reading xml file!');
      console.log(e);
    },
    success:function(response){

      $('.tab').find('td').remove();

      $(response).find('restaurant').each(function(){
        var resname = $(this).attr('name');
        var address = $(this).attr('address');
        var latitude = $(this).attr('lat');
        var longitude = $(this).attr('lng');
        var type = $(this).attr('type');

        $('.tab').append('<tr><td>'+
        resname+"</td><td><a href = 'https://maps.google.com/?ll="+latitude+","+longitude+"'>"+
        address+'</a></td><td>'+
        type+'</td></tr>');
        // console.log(resname);
        // console.log(address);
        // console.log(type);
      });
    }

  });
}
