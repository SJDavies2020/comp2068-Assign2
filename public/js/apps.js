const urlLocation = window.location.href;
let surveyList = null;
let surveyOptions = null;
let multiText = null;

if (urlLocation.includes("truefalse")) {
	let btn1 = document.getElementById("btn1");
	btn1.addEventListener("click", AddtoUl);
	// Get the survey UL
	surveyList = document.getElementById("surID");
} else if (urlLocation.includes("multichoice")) {
	let btn7 = document.getElementById("btn7");
	btn7.addEventListener("click", AddtoUltxt);
	let btn5 = document.getElementById("btn5");
	btn5.addEventListener("click", AddtoUlmulti);
	let btn6 = document.getElementById("btn6");
	btn5.addEventListener("click", AddtoMultiOut);
	// Get the survey UL
	surveyList = document.getElementById("surID");
	surveyOptions = document.getElementById("textElm");

} else if (urlLocation.includes("textarea")) {
	let btn3 = document.getElementById("btn3");
	btn3.addEventListener("click", AddtoUltext);
	// Get the survey UL
	surveyList = document.getElementById("surID");
}

function getResult(isNumber) {
	return (isNumber = "on" ? "True" : "False");
}

function AddtoUl(evt) {
	evt.preventDefault();
	var radios = document.getElementsByName("quest1");
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			myAnswers = "true";
			// only one radio can be logically checked, don't check the rest
			break;
		} else {
			myAnswers = "false";
			break;
		}
	}
	let mySurveyName = document.getElementById("sName").value;
	let myQuestion = document.querySelector("input#quest").value;
	let myLi = document.createElement("li");
	myLi.className = "list-group-item list-group-item-primary";
	myLi.dataset.index = mySurveyName;
	myLi.innerHTML = mySurveyName + "," + myQuestion + "," + myAnswers;
	surveyList.appendChild(myLi);
}

function AddtoUltext(evt) {
	evt.preventDefault();
	let mySurveyName = document.getElementById("sName").value;
	let myQuestion = document.querySelector("input#quest").value;
	let myLi = document.createElement("li");
	myLi.className = "list-group-item list-group-item-primary";
	myLi.dataset.index = mySurveyName;
	myLi.innerHTML = mySurveyName + "," + myQuestion;
	surveyList.appendChild(myLi);
}

function AddtoUlmulti(evt) {
	let mySurveyName = document.getElementById("sName").value;
	let myQuestion = document.querySelector("input#quest").value;
}

function AddtoUltxt(evt) {
	evt.preventDefault();
	let mySurveyName = document.getElementById("sName").value;
	var e = document.getElementById("valueTxt");
	var myVal = e.options[e.selectedIndex].value;
	console.log(myVal);
	for (i = 0; i < myVal; i++) {
		let myLi = document.createElement("li");
		let myInput = document.createElement("input");
		let myButton = document.createElement("button");
		myButton.id = i;
		myButton.innerHTML = "Delete";
		myButton.addEventListener("click", deleteMe);
		myInput.className = "multiList";
		myLi.id = "txt" + i;
		myLi.className = "multiOut"
		myLi.appendChild(myInput);
		myLi.appendChild(myButton);
		surveyOptions.appendChild(myLi);
	}
}
function deleteMe(evt) {
	evt.preventDefault();
	let eleID = evt.currentTarget.id;
	let elem = document.getElementById("txt" + eleID);
	elem.parentNode.removeChild(elem);
}

function AddtoMultiOut(evt) {
	evt.preventDefault();

	surveyList = document.getElementById("surID");
	let mySurveyName = document.getElementById("sName").value;
	let myQuestion = document.querySelector("input#quest").value;
	let myMultiOut = document.querySelectorAll('input.multiList');
	let myLi = document.createElement("li");
	myLi.className = "list-group-item list-group-item-primary";
	myLi.dataset.index = i;
	myLi.innerHTML = mySurveyName + "," + myQuestion;
	for (let i = 0; i < myMultiOut.length; i++) {
		myLi.innerHTML += "," + myMultiOut[i].value;
	}
	surveyList.appendChild(myLi);
}
