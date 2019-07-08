$(document).ready(() => {
  $("#datatab").DataTable({
    serverSide:true,
    ajax:{
      url:'https://www.quandl.com/api/v3/datasets/NASDAQOMX/NQUSB8775LMT.json?api_key=ksxyQgkKkcpYRiKkXVKZ',
      type:'GET',
      dataSrc:function(response){
        var datum = JSON.stringify(response.dataset.data);
        console.log(datum);
      }
    }
  });
  // toJson();
});

function toJson(){
  $.ajax({
    url:'https://www.quandl.com/api/v3/datasets/NASDAQOMX/NQUSB8775LMT.json?api_key=ksxyQgkKkcpYRiKkXVKZ',
    type:'GET',
    success:function(response){
      var datum = response.dataset.data;
      var $arr = {
        data:[]
      };

      for (var i = 0; i < 2; i++) {
        $arr.data.push(datum[i]);
        // alert(datum[i]);
      }
      $arr  = JSON.stringify($arr);
      console.log($arr);
    }
  });
}
