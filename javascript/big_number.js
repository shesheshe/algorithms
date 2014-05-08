/*
* 正數 + 正數 ok
* 負數 + 負數 ok
* 正數 + 負數 ...
*/
var bn = function(a, b) {

	var max = 20, i = 0, tmp = 0, tmp2 = 0;
	var arr = [], arr_tmp = [], j = 0;
	var aLength = a.length;
	var bLength = b.length;

	function run(tmp, i) {

		if(parseInt(tmp/10) == 0) {
			arr[i] = tmp;
			tmp2 = 0;
		} else {
			arr[i] = parseInt(tmp%10);
			tmp2 = parseInt(tmp/10);
		}

		
	}
	
	a = positive2negative(a);
	b = positive2negative(b);

	a = a.reverse();
	b = b.reverse();

	for(i=0; i<max; i++) {
		if(a[i] != undefined) {
			if(b[i] != undefined) {
			
				run(a[i] + b[i] + tmp2, i);
				
			} else {
			
				run(a[i] + tmp2, i);
				
			}
			
		} else {
			if(b[i] != undefined) {
			
				run(b[i] + tmp2, i);
				
			} else {
			
				arr[i] = tmp2==0?'-':tmp2;
				tmp2 = '-';
				
			}
		}
	}

	arr.reverse();
	
	for(i=0; i<max; i++) {
		if(arr[i] != '-') {
			arr_tmp[j++] = arr[i];
		}
	}

	arr_tmp = negative2positive(arr_tmp);
	
	return arr_tmp;

}

/*
* 假如陣列第一個元素是[ - ], 就把每個元素乘以負1
*/
var positive2negative = function(arr) {
	var len = arr.length;
	var i = 0;

	if(arr[0] == '-') {
		for(i=0; i<len; i++) {
			if(arr[i+1] != undefined) {
				arr[i] = arr[i+1] * -1;
			}
		}
		arr.pop();
	}

	return arr;
}

/*
* 假如陣列第一個元素是負數, 就把每個元素變成絕對值, 並把第一個元素變成[ - ]
*/
var negative2positive = function(arr) {
	var len = arr.length;
	var i = 0;

	if(arr[0] <= -1) {
		arr.unshift('-');
		len = len + 1;
		for(i=1; i<len; i++) {
			if(arr[i] != undefined) {
				arr[i] = Math.abs(arr[i]);
			}
		}
	}

	return arr;
}

arr = ['-', 5];
arr2 = ['-', 1, 0];

_arr = bn(arr, arr2);
console.log(arr);
console.log('+');
console.log(arr2);
console.log('=');
console.log(_arr);