$(document).ready(() => {
  jsonData();
});

function jsonData(){
  $.ajax({
    type:'GET',
    url:'https://www.quandl.com/api/v3/datasets/NASDAQOMX/NQUSB8775LMT.json?api_key=ksxyQgkKkcpYRiKkXVKZ',
    dataType:'json',
    cache:'false',
    error:function(e){
      console.log(e);
    },
    success:function(response){
      var cols = response.dataset.column_names;
      var data = response.dataset.data;
      for(i=0;i<6;i++){
        $('thead').append('<th>'+cols[i]+'</th>');
      }
      // console.log(data[1]);
      for(i=1;i<data.length;i++){
        var arr = data[i];
        $('tbody').append('<tr>');
        for (var j = 0; j < arr.length; j++) {
          var datum = arr[j];
          // alert(arr[j]);
          $('tbody').append('<td scope = "col">'+datum
          +'</td>');
          // $('tbody').append('<td scope="col"'+datum+'</td>');
        }
        $('tbody').append('</tr>');
      }
    }
  });
}
