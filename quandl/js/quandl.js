$(document).ready(() => {
  quandlData();
});

function quandlData(){
  $.ajax({
    type:'GET',
    url:"https://www.quandl.com/api/v3/datasets/NASDAQOMX/NQUSB8775LMN.xml?api_key=ksxyQgkKkcpYRiKkXVKZ",
    dataType:'xml',
    cache:'false',
    error:function(e){
      console.log('could not read xml document!',e);
    },
    success:function(response){

      $(response).find('column-names').each(function (){
        $(this).find('column-name').each(function (){
          var trade = $(this).text();
          $('thead').append('<th scope = "col">'+trade+'</th>')
          // alert(trade);
        });
      });

      $(response).find('data').each(function(){
        $(this).find('datum').each(function(){
          $('tbody').append('<tr>');
          $(this).find('datum').each(function(){
            var date = $(this).attr('type','float').text();
            $('tbody').append('<td scope = "col">'+date
            +'</td>');
          });
          $('tbody').append('</tr>');
        });
      });
      console.log(response);
    }

  });
}
