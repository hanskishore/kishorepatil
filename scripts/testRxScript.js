	$(function(){
				alert('I got loaded');
				debugger;
				///**************Simple return *********************/////
				//var answer = Rx.Observable.returnValue(42);
				
				
				//var observ = Rx.Observer.create(
					//function(x){$("#container").append("The response is: " + x);}
				//);
				//answer.subscribe(observ);
				///** some factory methods ************************
				
				//var source = //Rx.Observable.range(1,25);Rx.Observable.throwException("oops");Rx.Observable.empty();null;
			//	var source = Rx.Observable.generate(0, function(i){return i < 4;}, function(i){ return i + 1;}, function(i) {return i * i;});
				//var subscription = source.subscribe(
					//function(next){$("#container").append("onNext: " + next);},
					//function(err) {$("#container").append("onError: " + err);},
					//function() {$("#container").append("onComplete: " );}
				//);
				//var se = $("document").addeventObservable("mousemove");
				//se.subscribe(function(x){$("#container").append("onNext: " + x);});
				
				
				var text = 'time flies like an arrow', container =$("#container"), mouseMove = $("document").fromEvent('mousemove'),mouseMoveOffset = mouseMove.select(function(value){debugger;
					var offset = getOffset(container);
					return {
						offsetX : value.clientX - offset.left + container.parent().parent().scrollLeft(),		offsetY : value.clientY - offset.top + container.parent().parent().scrollTop()
						};
				});
				
				for(var i = 0;i < text.length; i++){
					(function(i){
					 var s = document.createElement('span');
					 s.innerHTML = text[i];
					 s.style.position = 'absolute';
					 container.append(s);
					 debugger;
					 mouseMoveOffset.delay(i * 100).subscribe(
						function(mouseEvent){debugger;
							s.style.top = mouseEvent.offsetY + 'px';
							s.style.left = mouseEvent.offsetX + i * 10 + 15 + 'px';
						}
					 );
					
					})(i);
				}
				
			});
			
			function getOffset(cont){
				
				var docElem = cont.parent().parent(),
				body = cont.parent(),
				clientTop = docElem.offset().top || body.offset().top || 0,
					clientLeft = docElem.offset().left || body.offset().left || 0,
				scrollTop = window.pageYOffset,
				scrollLeft = window.pageXOffset;
				
				return {top: scrollTop - clientTop, left: scrollLeft - clientLeft};
			}