$(document).ready(() => {
  $("#datatab").DataTable({
    serverSide:true,
    ajax:{
      url:'https://www.quandl.com/api/v3/datasets/NASDAQOMX/NQUSB8775LMT.json?api_key=ksxyQgkKkcpYRiKkXVKZ',
      type:'GET',
      dataSrc:function(response){
        var $datum = {
          data:[
          ]
        }
        $arr = response.dataset.data;

        $datum.data = $arr;
        return $datum.data;
        console.log($datum);
      }
    }
  });
});
