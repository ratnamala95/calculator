$(document).ready(() => {

  $('.btn').on('click',() =>{
    alert('success!');
    showData();
  });


});


function showData(){
  console.log('function called!');
  $.ajax({
    type:'GET',
    url:'xml/nutrition.xml',
    dataType:'xml',
    cache:'false',
    error:function (e){
      alert('An error occured while reading xml file!');
      console.log('XML reading failed!',e);
    },
    success:function(response){
      // var xm = $.parseXML(response);
      alert(response);
      $('#tableau').html(response);
      console.log(response);
    }

  });
}
