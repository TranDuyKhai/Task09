$(function(){

	function scrollToElement(classFirst, nameClassAdd) {
		$(classFirst).each(function() {
			var spaceTop = $(this).offset().top;
			var chieucao = $(this).height();
			var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
			var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
			var scrollSpaceTop = $(window).scrollTop();
			if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop + (chieucao/2) < scrollSpaceTop + $(window).height())) {
				$(this).addClass(nameClassAdd);
			}
		});
	}
});