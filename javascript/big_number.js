/*
* 正數 + 正數 ok
* 正數 + 負數 ...
*/
var bn = function(a, b) {

	var max = 20, i = 0, tmp = 0, tmp2 = 0;
	var arr = [], arr_tmp = [], j = 0;
	var aLength = a.length;
	var bLength = b.length;

	a = a.reverse();
	b = b.reverse();

	for(i=0; i<max; i++) {
	
		if(a[i] != undefined) {
			
			if(b[i] != undefined) {
				
				tmp = a[i] + b[i] + tmp2;

				if(parseInt(tmp/10) == 0) {
					arr[i] = tmp;
					tmp2 = 0;
				} else {
					arr[i] = parseInt(tmp%10);
					tmp2 = parseInt(tmp/10);
				}
				
			} else {
				tmp = a[i] + tmp2;
				if(parseInt(tmp/10) == 0) {
					arr[i] = tmp;
					tmp2 = 0;
				} else {
					arr[i] = parseInt(tmp%10);
					tmp2 = parseInt(tmp/10);
				}
			}
			
		} else {
		
			if(b[i] != undefined) {

				tmp = b[i] + tmp2;
				if(parseInt(tmp/10) == 0) {
					arr[i] = tmp;
					tmp2 = 0;
				} else {
					arr[i] = parseInt(tmp%10);
					tmp2 = parseInt(tmp/10);
				}
			} else {
				arr[i] = tmp2;
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
	
	return arr_tmp;
	
}

arr = [5, 5, 5];
arr2 = [5, 5, 5];

_arr = bn(arr, arr2);
console.log(arr);
console.log('+');
console.log(arr2);
console.log('=');
console.log(_arr);