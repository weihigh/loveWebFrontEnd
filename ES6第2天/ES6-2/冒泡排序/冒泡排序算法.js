var arr = [32,23,45,2,3,45];

function sort(arr){
	for(var i = 0 ; i < arr.length - 1 ; i++){
		for(var j = arr.length - 1 ; j > i ; j--){
			if(arr[j] < arr[j - 1]){
				var temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

console.log(sort(arr));