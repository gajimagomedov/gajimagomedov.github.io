(function(){

	const inputValueProgress = document.getElementById("progress-value");
	const btnStartAnimate = document.getElementById("checkbox-animate");
	const btnHideProgress = document.getElementById("checkbox-hide");

	function progressBarPrototye(){
		const progressBar = document.querySelector(".progress-container");
		const progressValue = progressBar.querySelector(".progress-bar__value");
		const radius = progressValue.getAttribute("r");
		let circumference = 2 * Math.PI * radius;

		progressValue.style.strokeDasharray = circumference;

		function setProgress(value) {
			let progress = value / 100;
			let dashoffset = circumference * (1 - progress);
		
			progressValue.style.strokeDashoffset = dashoffset;
			animateValue(0, value, 1500);
		}

			
		function animateValue(start, end, duration) {
			let range = end - start;
			let minTimer = 50;
			let stepTime = Math.abs(Math.floor(duration / range));
		
			stepTime = Math.max(stepTime, minTimer);
			
			let startTime = new Date().getTime();
			let endTime = startTime + duration;

			function run() {
				let now = new Date().getTime();
				let remaining = Math.max((endTime - now) / duration, 0);
				let value = Math.round(end - remaining * range);
				if (value == end) {
				clearInterval(timer);
				}
			}
			
			let timer = setInterval(run, stepTime);
			run();
		}

		function progressAnimate(){
			progressValue.classList.toggle("animate");
		}

		function hideProgressBar(){
			progressBar.classList.toggle("hidden");
		}

		return { setProgress, progressAnimate, hideProgressBar };
		
	}

	let progressBar = progressBarPrototye();
	progressBar.setProgress(inputValueProgress.value);


	inputValueProgress.addEventListener("input", function(e){
		let value = +this.value;
		value = isNaN(value) ? 0 : value;

		if (value > 100 || value < 0) {
			value = value > 100 ? 100 : 0;	
		}

		this.value = value;
		progressBar.setProgress(value);
	});



	btnStartAnimate.addEventListener("click", progressBar.progressAnimate);
	btnHideProgress.addEventListener("click", progressBar.hideProgressBar);

})();