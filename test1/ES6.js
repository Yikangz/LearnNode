//ES6规范
//(1),箭头函数

//1,有一个参数和返回值
var foo = function(v){
	
	return v;
}

// =>
var foo = (v)=>{v}

//2,有两个参数和返回值

var foo = function(v1,v2){

	return v;
}

// =>
var foo = (v1,v2) {v};


//3,有两个参数没有返回值

var foo = function(v1,v2){

}

// =>
var foo = (v1,v2)=>{};

//4没有参数没有返回值

var foo = function(){

}

// =>
var foo = ()=>{};

//5 没有参数有返回值

var foo = function(){

	var a = 123;
	return a;
}

// =>
var foo = ()=>{
	var a = 123;
	return a;
};



