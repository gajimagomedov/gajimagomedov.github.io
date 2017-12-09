(function(){
	const btn = document.querySelector('button');
	const progressBar = document.querySelector('.progress-bar');
  const firstCircle = document.getElementById('circle-one');
	const secondCircle = document.getElementById('circle-two');
	let angle = 0;
  let percent = 70*5.7;

	let timer = setInterval(function(){
    secondCircle.setAttribute("stroke-dasharray", angle + ", 20000");
    firstCircle.innerHTML = parseInt(angle/471*100);
    
    if (angle >= percent) {
      clearInterval(timer);
    }
    angle += 5;
  }, 30);
	
	btn.onclick = () => {
		//progress.style.transform = 'none';
		progress.style.animation = 'preloader 3.5s infinite linear';
	}
	
	let inputValue = document.querySelector('.progress-control__value');
	
	
	function valueProgress(){
		
	}
	
	inputValue.addEventListener('keydown', function(e){
		  e = e || event;

  if (e.ctrlKey || e.altKey || e.metaKey) return;


		if(e.keyCode === 38)
			this.value < 100 ? this.value++ : false;
		else if(e.keyCode === 40)
			this.value == 0 ? false : this.value--;
		
		e.preventDefault();
	});
	
	
})();