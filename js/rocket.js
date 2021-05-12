var timer = null;
var countdounNumber = 10;

var changeState = function(state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdounNumber = 10;
	document.getElementById('countdown').innerHTML = countdounNumber;

	//countdown
	if(state == 2)
	{
		timer = setInterval(function(){
			countdounNumber = countdounNumber - 1;
			document.getElementById('countdown').innerHTML = countdounNumber;
			if(countdounNumber <= 0){
				changeState(3);
			};
		}, 100);
		
	}else if(state == 3){
		var succces = setTimeout(function(){
				var randomNumer = Math.round(Math.random()*10)
				console.log('randomNumer:', randomNumer)
				if(randomNumer > 5)
				{
					changeState(4);
				}
				else
				{
					changeState(5);
				};
		}, 2000)
	};
}