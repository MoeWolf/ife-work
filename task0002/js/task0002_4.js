var nameList = ['Anna','Brittany','Cinderella','Diana','Eva','Fiona','Gunda','Hege','Inga','Johanna','Kitty','Linda','Nina','Ophelia','Petunia','Amanda','Raquel','Cindy','Doris','Eve','Evita','Sunniva','Tove','Unni','Violet','Liza','Elizabeth','Ellen','Wenche','Vicky','Quality','Quote','Work','Review','Yet','You','Zero','Zip','Xylophone','Xylene','Material'];
var myInput = $('.myDateText');
var selectBar = $('.select');
var selec = selectBar.getElementsByTagName('li');

addInputEvent();

function addInputEvent () {
	if(myInput.addEventListener) {
		myInput.addEventListener('input',onInput);
	}
	else if(myInput.attachEvent) {
		myInput.attachEvent('onpropertychange',onPropChanged);
	}
}

function onInput(event) {
	var myText = event.target.value;
	handleInput(myText);
}

function onPropChanged(event) {
	var myText = '';
	if(event.propertyName.toLowerCase() == 'value') {
		myText = event.srcElement.value;
		handleInput(myText);
	}
}

function handleInput(inputText) {
	if(inputText === '') {
		selectBar.innerHTML = '';
	}
	else{
		selectBar.style.display = 'block';
		var reg = new RegExp("^" + myInput.value, "i");
		var result;
		result = nameList.filter(function(item) {
					return item.match(reg);
				});
				var litext = "";
				for(var i = 0; i < result.length; i++) {
					litext += "<li>" + result[i] + "</li>"
					selectBar.innerHTML = litext;
				}
		}
	onmouse();
	}

function onmouse() {
	for(var i = 0, len = selec.length; i < len; i++) {
		selec[i].addEventListener('click', function(e) {
			var seltar = this.innerHTML;
			myInput.value = seltar;
			clearSelectBar();
		});
		selec[i].addEventListener('mousemove', function(e) {
			this.className = 'active';
		});
		selec[i].addEventListener('mouseleave', function(e) {
			this.className = '';
		});
	}
}

function clearSelectBar() {
	selectBar.style.display = 'none';
}

document.onkeydown = function(e) {
	if(e.keyCode == 40) {
		var actli = selectBar.getElementsByClassName("active")[0];
		if(actli) {
			if(actli.nextElementSibling == null) {
				return false;
			}
			actli.nextElementSibling.className = "active";
			actli.className = "";
		}
		else {
			var allLi = selectBar.getElementsByTagName("li");
			allLi[0].className = 'active';
		}
	}
	if(e.keyCode == 38) {
		var actli = selectBar.getElementsByClassName("active")[0];
		if(actli) {
			if(actli.previousElementSibling == null) {
				return false;
			}
			actli.previousElementSibling.className = "active";
			actli.className = "";
		}
	}
	if(e.keyCode == 13) {
		var actli = selectBar.getElementsByClassName("active")[0];
		var seltar = actli.innerHTML;
		myInput.value = seltar;
		clearSelectBar();
	}
}


function onkeyboard(e) {
	e = e || window.event;
	for(var i = 0, len = selec.length; i < len; i++) {
		selec[i].addEventListener('keyup',function() {
			if(e.keyCode == '40') {
				this.style.backgroundColor = '#fff';
				this.style.color = '#000';
				this.nextSibling.style.backgroundColor = '#c0c0c0';
				this.nextSibling.style.color = '#fff';
			}
		})
	}
}
