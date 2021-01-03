function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            console.log(i,j);
            var temp = arr[j-1];
            arr[j-1] = arr[j]; 
            arr[j] = temp;
            //console.log(arr);
         }
      }
    }
    return arr;
 }
 bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]

 for(let i = 0; i < array.length; i--){
	for(let j = 1; j <= i; j++){
		if(array[j-1] > array[j]){
			let temp = array[j-1];
			array[j-1] = array[j];
			array[j] = temp;
			
		}
	}
}
	return array[array.length-1, array.length-2, array.length-3];
}