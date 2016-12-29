//  提供一个字符串数组，两个数字，分别表示 0 的个数和1 的个数
//  输出 最大的字符串个数

var findMaxForm = function(strs, m, n) {
    var arr = [];

    var max = {
    	one : m,
    	zero : n
    }

    //排序
    for(var i = 0 ; i < strs.length ; i++){
    	var len = strs[i].length;
    	for(var j = i + 1; j < strs.length ; j++){
    		var len2 = strs[j].length;
    		if(len > len2){
    			var temp = strs[i];
    			strs[i] = strs[j];
    			strs[j] = temp;
    		}
    	}

    	var str = strs[i];
    	arr.push({one : str.replace(/0/g,'').length, zero : str.replace(/1/g,'').length});
    }
    // console.log(strs);
    // console.log(arr);

    var count = 0;

    var success = false;
    console.log(arr);
    for(var i = 0 ; i < arr.length ; i++){
    	var o = arr[i];
    	var _count = 0;
    	var lose = false;
		var one = 0 , zero = 0;
    	one = max.one - o.one;
    	zero = max.zero - o.zero;
    	if(one >= 0 && zero >= 0){

    		console.log(one,zero);
			if(one === 0 && zero === 0){ // 成功
    			count += 1;
    			break;
    		}

	    	for(var j = i + 1 ; j < arr.length ; j++){
	    		var _o = arr[j];
	    		one = one - _o.one;
	    		zero = zero = _o.zero;

	    		if(one === 0 && zero === 0){ // 成功
	    			success = true;
	    			break;
	    		}

	    		if(one < 0 || zero < 0){
	    			lose = true;
	    			break;
	    		}else{
	    			_count += 1;
	    		}
	    	}
	    	console.log(max,o,lose);

	    	if(success){
	    		count = count + _count + 1;
	    		break;
	    	}

	    	if(!lose){
	    		max.one = max.one - o.one ;
	    		max.one = max.zero - o.zero;
	    	}else{

	    	}

    	}
    }
    console.log(success);

    return count;
    


};

// console.log(findMaxForm(["10", "0001", "111001", "1", "0"],5,3) );
console.log(findMaxForm(["10", "0", "1","1","00"],2,3) );