$(document).ready(() => {
  $("#datatab").DataTable({
    serverSide:true,
    ajax:{
      url:'https://www.quandl.com/api/v3/datasets/NASDAQOMX/NQUSB8775LMT.json?api_key=ksxyQgkKkcpYRiKkXVKZ',
      type:'GET',
    }
  });
});
