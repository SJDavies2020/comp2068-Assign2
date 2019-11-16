let questions = [];
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", AddtoUl);

// Get the survey UL
let surveyList = document.getElementById("surID");

function getResult(isNumber) {
	return (isNumber = "on" ? "True" : "False");
}

function AddtoUl(evt) {
	evt.preventDefault();

	var radios = document.getElementsByName('quest1');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			myAnswers = "true";
			// only one radio can be logically checked, don't check the rest
			break;
		}
		else {
			myAnswers = "false";
			break;
		}
	}

	let mySurveyName = document.getElementById('sName').value
	let myQuestion = document.querySelector("input#quest").value;
	let myLi = document.createElement('li');
	myLi.className = "list-group-item list-group-item-primary";
	myLi.dataset.index = mySurveyName;
	myLi.innerHTML = mySurveyName + "," + myQuestion + "," + myAnswers;
	surveyList.appendChild(myLi);
}