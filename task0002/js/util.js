//Created by Wang Binbin
//         on 2016.7.4  
//task 2.1
//// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
	return Object.prototype.toString.call(arr) === '[object array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
	return Object.prototype.toString.call(fn) === '[object function]';
}
//task2.2
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var clone = src;
    
    //对于object,array,date等引用类型，直接赋值克隆会有引用问题，需用构造函数重新构造.
    //对于array
    if (src instanceof Array) {
    	clone = [];
    	for (var key in src) {
    		clone[key] = cloneObject(src[key]);
    	}
    	return clone;
    }
    
    //对于object
    if (src instanceof Object){
    	clone = {};
    	for (var key in src) {
    		if (src.hasOwnProperty(key)) {    //忽略继承属性
    			clone[key] = cloneObject(src[key]);
    		}
    	}
    	return clone;
    }
    
    //对于date
    if (src instanceof Date) {
    	clone = new Date(src.getDate());
    	return clone;
    }
    
    //对于string,num,boolean等值类型
    return src;
}

// 测试用例：
/*var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"
*/

//task2.3
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
// 最简单数组去重法  
function uniqArray(array){  
var n = []; //一个新的临时数组  
//遍历当前数组  
for(var i = 0; i < array.length; i++){  
//如果当前数组的第i已经保存进了临时数组，那么跳过，  
//否则把当前项push到临时数组里面  
if (n.indexOf(array[i]) == -1) n.push(array[i]);  
}  
return n;  
} 

//优化遍历数组法
function uniqArray1(array){  
var r = [];  
for(var i = 0, l = array.length; i < l; i++) {  
 for(var j = i + 1; j < l; j++)  
  if (array[i] === array[j]) j = ++i;  
 r.push(array[i]);  
 }  
 return r;  
} 

// 使用示例
/*
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);

var al = 10000;
var a = [];
while (al--){
a.push(al%2);
}

console.time('uniqArray')
console.log(uniqArray(a).length);
console.timeEnd('uniqArray')

console.time('uniqArray1')
console.log(uniqArray1(a).length);
console.timeEnd('uniqArray1')

console.time('uniqArray2')
console.log(uniqArray2(a).length);
console.timeEnd('uniqArray2')

console.time('uniqArray3')
console.log(uniqArray3(a).length);
console.timeEnd('uniqArray3')
*/

//task2.4
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    function isEmpty(c) {
        return /\s/.test(c);
    }

    var len = str.length;
    for (var i = 0; i < len && isEmpty(str.charAt(i)); i++);
    if (i === len) {
        return '';
    }
    for (var j = len; j && isEmpty(str.charAt(j - 1)); j--);
    return str.substring(i, j);
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// 使用示例
/*
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'
*/

//task2.5
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for (var i=0;i<arr.length;i++) {
    	fn(arr[i],i);
    }
}
// 其中fn函数可以接受两个参数：item和index

// 使用示例
/*var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html */

//task2.6
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var num = 0;
	for (key in obj) {
		if (obj.hasOwnProperty(key)){
			num++;
		}
	}
	return num;
}

// 使用示例
/*var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3
*/

//学习正则表达式，在`util.js`完成以下代码

//task2.7
// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
}


//task3.1
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    
}