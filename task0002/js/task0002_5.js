


var wrap = document.getElementsByClassName('drag-wrap');

//事件函数
function dragStart (e) {
	var dragWrap = $('#dragContainer').offsetLeft;
	e = e || window.event;
	var parent = this.parentNode;
	startX = e.clientX;
	startY = e.clientY;
	startTop = parseInt(this.style.top) + 18;
	startLeft = parent.offsetLeft - dragWrap + 80;
	this.style.zIndex = 1;
	moveDrag(nextDrag(this),-36);
//	console.log(startLeft);
//	console.log($('#dragContainer').offsetParent.tagName);
//	console.log(parent.offsetParent.tagName);
}

function dragging (ele) {
	if(this.className !== 'draging') {
		this.className = 'draging';
	}
}

function dragOver (e) {
	e.preventDefault();
}

function drop (e) {
	e = e || window.event;
	e.preventDefault();
	var location = getLocation(e);
	console.log(location[0]);
	console.log(location[1]);
}

//工具函数
function nextDrag (ele) {
	var brother = ele.nextSibling;
	while(brother && brother.nodeName === '#text') {
		brother = nextDrag(brother);
	}
	return brother;
}

function moveDrag(ele,distance) {
	while(ele) {
		ele.style.top = parseInt(ele.style.top) + distance + 'px';
		ele = nextDrag(ele);
	}
}

function getLocation(e) {
	var location = [];
	e = e || window.event;
	var moveX = e.clientX - startX;
	var moveY = e.clientY - startY;
	var x = startLeft + moveX;
	var y = startTop + moveY;
	
	if(x < 230) {
		location[0] = 0;
	}
	else if(x >= 230 && x<= 500) {
		location[0] = 1;
	}
	else{
		location[0] = 2;
	}
	
	location[1] = Math.floor((y+18)/36);
	var dragNum = wrap[location[0]].getElementsByClassName('drag').length;
	location[1] = Math.max(location[1],0);
	location[1] = Math.min(location[1],dragNum);
	return location;
}

window.onload=function () {
	var drag = document.getElementsByClassName('drag');
	for(var i=0,len=drag.length;i<len;i++) {
		drag[i].draggable = true;
		drag[i].style.top = (i%6*36) + 'px';
		$.on(drag[i],'dragstart',dragStart);
		$.on(drag[i],'drag',dragging);
	}
	$.on(document.body,'dragover',dragOver);
	$.on(document.body,'drop',drop);
}
