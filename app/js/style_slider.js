$(document).ready(function(){

	$('.sl__prev').on('click',function () {
		switchSlider(false)
	});
	$('.sl__next').on('click',function () {
		switchSlider(true)
	});


	function switchSlider(bulid){
			 var id = imgId();
			 var imgAll = imgIdAll();
			if( id!==imgAll && bulid){
				switchingClassActive(idAllActive(true,id),id);
			}
			else if(id===imgAll&& bulid){
				switchingClassActive(1,id);
			}
			else if(id===1 && !bulid){
				switchingClassActive(imgAll,id);
			}
			else{
				switchingClassActive(idAllActive("--",id),id);
			}
	}

	function switchingClassActive(direction,id){
		$('#img'+direction).addClass('active');  //вешает класс актив на след. img
		$('#img'+id).removeClass('active');			//удаляет класс актив
        $('#bots'+direction).addClass('sl__bots-active');
        $('#bots'+id).removeClass('sl__bots-active');
	}

	function imgId() {
		return activeClass = parseInt($('.active').attr('id').replace(/\D+/g,""));  //получает порядковый номер картинки//
	}

	function idAllActive(next,id) {    // находит следующую переменную
		return next === true ? ++id : --id;
	}

	function imgIdAll() {
		return $('.sl__img').length;  //вычисляет количество картинок
	}

});

