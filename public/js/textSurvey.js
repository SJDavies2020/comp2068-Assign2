let questions = [];
let btn1 = document.getElementById("btn3");
btn3.addEventListener("click", AddtoUl);

// Get the survey UL
let surveyList = document.getElementById("surID");

function AddtoUltext(evt) {
    evt.preventDefault();
    var radios = document.getElementsByName('quest1');
    let mySurveyName = document.getElementById('sName').value
    let myQuestion = document.querySelector("input#quest").value;
    let myLi = document.createElement('li');
    myLi.className = "list-group-item list-group-item-primary";
    myLi.dataset.index = mySurveyName;
    myLi.innerHTML = mySurveyName + "," + myQuestion
    surveyList.appendChild(myLi);
}
