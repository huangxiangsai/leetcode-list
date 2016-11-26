/**提供两个变量，一个整型数组，一个整型数字 
*  
*  返回数组中 两个整型的索引
*  
*  要求：返回的两个整型相加等于指定的整型数字
*  
*  Example:
*  
*  Given nums = [2, 7, 11, 15], target = 9,
*  
*  Because nums[0] + nums[1] = 2 + 7 = 9,
*  return [0, 1].
**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var two_num = function(arr,target){
	var result = [];
	var filterArray = [];
	var i ;
	for(i = 0 ; i < arr.length ; i++){
		if(arr[i] <= target){
			filterArray.push({key: i , value : arr[i]});
		}
	}

	for(i = 0 ; i < filterArray.length; i++){
		var n1  = filterArray[i].value;
		for(var j = i+1 ; j < filterArray.length ; j++){
			var n2 = filterArray[j].value;
			if( (n1 + n2) == target){
				result.push(filterArray[i].key);
				result.push(filterArray[j].key);
				break;
			}
		}
		if(result.length){
			break;
		}
	}
	
	return result;
}

// example:
// var _arr = [1,2,3,4,5,6,7,7,8,10,32,12,30,12,03,23,123,43,54,565,23,67,87,232,189,55,203,293,4032,12,923,1,4543,6546,234,42,345,23234,234,346342,234634,5323,324,2,5,565,64564,767,675,45,4,535,3457,88,43,4,2,45,64,67,4,3453,643,3,23,6,,34,363,42,52];
// var target = 353;
// console.time('two-sum');
// var result = two_num(_arr,target);
// console.timeEnd('two-sum');
// console.log( result,(function(){
// 	if(result.length){
// 		console.log(_arr[result[0]],_arr[result[1]]);
// 		return _arr[result[0]] + _arr[result[1]];
// 	}
// })() );
