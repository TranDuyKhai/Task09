$(function(){
	$(window).on('load scroll',function() {
		scrollToElement('.listTimeLine__linePoint', 'draw');
	});
	function scrollToElement(classFirst, nameClassAdd) {
		$(classFirst).each(function() {
			var spaceTop = $(this).offset().top;
			var chieucao = $(this).height();
			var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
			var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
			var scrollSpaceTop = $(window).scrollTop();
			if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop + (chieucao / 2) < scrollSpaceTop + $(window).height())) {
				
				$(this).children(0).addClass(nameClassAdd);
				$(this).children(1).addClass(nameClassAdd);

				if($(this).children(1).hasClass(nameClassAdd)){
					setTimeout(function() {
						$(this).children(2).addClass(nameClassAdd);
					}, 1000);
					$(this).next().children(0).addClass(nameClassAdd);
				}
			}
		});
	}
	AOS.init({
		anchorPlacement: 'center bottom',
		once: true,
		offset: -150,
		duration: 500
	});
});