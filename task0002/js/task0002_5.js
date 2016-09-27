

//事件函数
function dragStart () {
	
}

function dragging () {
	
}

function dragOver () {
	
}

function drop () {
	
}





window.onload=function () {
	var drag = document.getElementsByClassName('drag');
	for(var i=0,len=drag.length;i<len;i++) {
		drag[i].draggable = true;
		drag[i].style.top = (i%6*35) + 'px';
		$.on(drag[i],'dragstart',dragStart);
		$.on(drag[i],'drag',dragging);
	}
	$.on(document.body,'dragover',dragOver);
	$.on(document.body,'drop',drop);
}
