$(document).on('pageshow', '#question', function(){ 

$(document).off('click', '#search_list').on('click', '#search_list', function() { 
 $.mobile.changePage($('#search_nearby_list'), { transition: "none", changeHash: true, reverse: false }); 
   return false;
});

});