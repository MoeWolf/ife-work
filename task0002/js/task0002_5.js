

//事件函数
function dragStart (e) {
	var dragWrap = $('#dragContainer').offsetLeft;
	//console.log(dragWrap);
	e = e || window.event;
	var parent = this.parentNode;
	startX = e.clientX;
	startY = e.clientY;
	startTop = parseInt(this.style.top) + 18;
	startLeft = parent.offsetLeft - dragWrap + 80;
	this.style.zIndex = 1;
	moveDrag(nextDrag(this),-36);
	console.log(dragWrap);
	console.log($('#dragContainer').offsetParent.tagName);
	console.log(parent.parentNode.tagName);
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
