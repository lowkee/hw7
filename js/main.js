 
(function() {
'use strict';

var BASE_URL = 'https://pacific-meadow-64112.herokuapp.com/data-api/';
var collection = 'ckee'; 

$('#create-submit').on( 'click', handleCreateForm );
$('#read-list').on( 'click', handleReadList );
$('#read-submit').on( 'click', handleReadForm );
$('#update-submit').on( 'click', handleUpdateForm );
$('#delete-submit').on( 'click', handleDeleteForm );


function reportResponse( response ) {
    $('#response').text( JSON.stringify( response, null, 4 ) );
}

function UserAction() {
    
    var response = JSON.parse();
}
  $("button").on("click",function(){
      
      $.ajax({
        },   url:"https://pacific-meadow-64112.herokuapp.com/data-api/ckee",
        success:function(response){
          var r=JSON.parse(response);
          $("#main").html(r.base);
        }
      });
});