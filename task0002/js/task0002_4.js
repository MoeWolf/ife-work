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
	console.log(inputText);
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
	onclick();
	}

function onclick() {
	for(var i = 0, len = selec.length; i < len; i++) {
		console.log(selec[i]);
		selec[i].addEventListener('click', function(e) {
			var seltar = this.innerHTML;
			console.log(seltar);
			myInput.value = seltar;
			clearSelectBar();
		});
		selec[i].addEventListener('mousemove', function(e) {
			this.style.backgroundColor = '#c0c0c0';
			this.style.color = '#fff';
		});
		selec[i].addEventListener('mouseleave', function(e) {
			this.style.backgroundColor = '#fff';
			this.style.color = '#000';
		});
	}
	
}

function clearSelectBar() {
	selectBar.style.display = 'none';
}
