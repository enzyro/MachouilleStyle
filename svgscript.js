

/*$('#AU').click(function(){
    if($('#infoAU').css('display') == 'none'){
        $('#infoAU').show();
    }else{
        $('#infoAU').hide();
    }
});
*/

$(document).ready(function(){
	
   /*var serial = '';
   $('path').each(function(){
	  serial = serial + $(this).attr('id') + '_';
   });
   alert(serial);*/
	$('path').click(function(){
		var e = $(this).attr('id');
		console.log("#info"+e);
		if($('#info'+e).css('display') == 'none'){
			$('#info'+e).show();
    }else{
        $('#info'+e).hide();
    }
	});
  $('generateur').click(function(){
    var e = $(this).attr('id');
    $(e.css('display')!= 'none')      
  });
});