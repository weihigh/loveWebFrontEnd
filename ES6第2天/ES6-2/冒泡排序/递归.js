function iterator(i){
	if(i > 100) return;
	console.log(i);
	iterator(i+1);
}

iterator(1);