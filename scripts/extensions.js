
(function($){
	$.fn.addListener=function(eventName, handler){
		$(this).on(eventName, handler);
	};
	
	$.fn.removeListener = function(eventName, handler){
		$(this).off(eventName, handler);
	};
	
	$.fn.fromEvent = function(eventName){debugger;
		return Rx.Observable.create(function (observer){
			var handler = function (ev) {
				observer.onNext(ev);
			};
			$(this).addListener(eventName, handler);
			return function () {
				$(this).removeListener(eventName, handler);
			};
			
		});
	}
	
})(jQuery);