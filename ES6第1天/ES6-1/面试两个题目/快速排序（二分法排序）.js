var arr = [3,5,3,5,6,324,234,456,23,42,342,342,53,45,43234,1231];

function quickSort(arr){
	if(arr.length < 1){
		return [];
	}
	var biaogan = arr[0];
	var bibiaoganxiaode = [];
	var bibiaogandade = [];
	for(var i = 1 ; i < arr.length ; i++){
		if(arr[i] >= biaogan){
			bibiaogandade.push(arr[i]);
		}else{
			bibiaoganxiaode.push(arr[i]);
		}
	}
	return quickSort(bibiaoganxiaode).concat(biaogan,quickSort(bibiaogandade));
}

console.log(quickSort(arr));