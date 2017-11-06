(function (){
	
	/*********************************************************************
	 ******* Example 5 Creating Observable and using API events **********
	 *********************************************************************/
	
	const Observable = Rx.Observable;
	const img = document.querySelector('img');
	const showName = document.querySelector('.show-name');
	const plot = document.querySelector('.plot');
	const getApiUrl = index => `https://api.tvmaze.com/shows/${index}?embed[]=cast&embed[]=seasons`;
	
})();