"use strict";


let submit_button = document.getElementById("submit_button")
let replaceDcheckbox = document.getElementById("gradeReplaceD")
let replaceFcheckbox = document.getElementById("gradeReplaceF")

let section = document.getElementById("output_section");


function calculateTargetGPAregular() {

    let priorCreditHours = parseInt(document.getElementById("priorCreditHours").value);
    let totalQualityPoints = parseFloat(document.getElementById("totalQualityPoints").value);
    const currentCreditHours = parseInt(document.getElementById("currentCreditHours").value);
    const targetTermGPA = parseFloat(document.getElementById("targetTermGPA").value);

    /*calculate current overall GPA and insert into form*/
    let currentOverallGPA = totalQualityPoints / priorCreditHours

    /*if D or F grade replacement, recalculate priorCreditHours
    and totalQualityPoints (in the case of D replacement)*/

    if (document.getElementById("creditsToReplaceF")) {
        if (document.getElementById("creditsToReplaceF").value) {
            let creditAdjust = parseInt(document.getElementById("creditsToReplaceF").value);
            console.log(creditAdjust);
            priorCreditHours = priorCreditHours - creditAdjust;
            console.log(priorCreditHours);
        }
    }

    if (document.getElementById("creditsToReplaceD")) {
        if (document.getElementById("creditsToReplaceD").value) {
            let creditAdjust = parseInt(document.getElementById("creditsToReplaceD").value);
            console.log(creditAdjust);
            priorCreditHours = priorCreditHours - creditAdjust;
            console.log(priorCreditHours);
            /* quality points for a D grade is (1 * number of credit hours) */
            totalQualityPoints = totalQualityPoints - (creditAdjust * 1);
        }
    }

    let par = document.getElementById("currentOverallGPA")
    par.innerText = "Current Overall GPA is: " + round(currentOverallGPA, 3)

    let target_credit_hours = priorCreditHours + currentCreditHours;
    console.log(target_credit_hours);
    let target_quality_pts = target_credit_hours * targetTermGPA;
    let needed_quality_pts = target_quality_pts - totalQualityPoints;
    console.log(needed_quality_pts);
    let target_GPA = needed_quality_pts / currentCreditHours;
    console.log(target_GPA);
    return round(target_GPA, 3);

}

function round(number, decimalPlaces) {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
}

function replaceDgrade(event) {
    let parent = document.getElementById("gradeReplaceDdiv");
    deleteResult(parent, 2)
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "creditsToReplaceD");
    parent.appendChild(input);

}

function replaceFgrade(event) {
    let parent = document.getElementById("gradeReplaceFdiv");
    deleteResult(parent, 2);
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "creditsToReplaceF");
    parent.appendChild(input);

}

function displayResult(event) {
    /*delete previous results if they are being displayed*/
    section = document.getElementById("output_section");
    deleteResult(section, 1);

    /*display result in output section*/
    let result_div = document.createElement("div");
    result_div.setAttribute("id", "output");
    /*append the result div to the section element and calculate result on submission*/
    section.appendChild(result_div);
    let resultGPA = calculateTargetGPAregular();
    /*resultGPA = round(resultGPA);*/
    result_div.innerText = "Target GPA for this semester is: " + resultGPA;
    /*event.preventDefault();*/

}

function deleteResult(parent, limit) {

    while (parent.children.length > limit) {
        parent.removeChild(parent.lastChild);
    }
}

replaceDcheckbox.addEventListener("input", replaceDgrade);
replaceFcheckbox.addEventListener("input", replaceFgrade);
submit_button.addEventListener("click", displayResult);
