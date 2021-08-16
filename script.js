"use strict";


let submit_button = document.getElementById("submit_button")
let replaceDcheckbox = document.getElementById("gradeReplaceD")
let replaceFcheckbox = document.getElementById("gradeReplaceF")

let section = document.getElementById("output_section");


function calculateTargetGPAregular() {

    const priorCreditHours = document.getElementById("priorCreditHours").value;
    const totalQualityPoints = document.getElementById("totalQualityPoints").value;
    const currentCreditHours = document.getElementById("currentCreditHours").value;
    const targetTermGPA = document.getElementById("targetTermGPA").value;

    /*calculate current overall GPA and insert into form*/
    let currentOverallGPA = totalQualityPoints / priorCreditHours

    let par = document.getElementById("currentOverallGPA")
    par.innerText = "Current Overall GPA is: " + currentOverallGPA

    let target_credit_hours = parseInt(priorCreditHours) + parseInt(currentCreditHours);
    console.log(target_credit_hours);
    let target_quality_pts = target_credit_hours * parseFloat(targetTermGPA);
    let needed_quality_pts = target_quality_pts - parseFloat(totalQualityPoints);
    console.log(needed_quality_pts);
    let target_GPA = needed_quality_pts / parseInt(currentCreditHours);
    console.log(target_GPA);
    return target_GPA;

}

function replaceDgrade(event) {
    let parent = document.getElementById("gradeReplaceDdiv");
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "creditsToReplaceD");
    parent.appendChild(input);

}

function replaceFgrade(event) {
    let parent = document.getElementById("gradeReplaceFdiv");
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "creditsToReplaceF");
    parent.appendChild(input);

}

function displayResult(event) {
    /*delete previous results if they are being displayed*/
    section = document.getElementById("output_section");
    deleteResult(section);

    /*display result in output section*/
    let result_div = document.createElement("div");
    result_div.setAttribute("id", "output");
    /*append the result div to the section element and calculate result on submission*/
    section.appendChild(result_div);
    let resultGPA = calculateTargetGPAregular()
    result_div.innerText = "Target GPA for this semester is: " + resultGPA;
    /*event.preventDefault();*/

}

function deleteResult(parent) {

    while (parent.children.length > 1) {
        parent.removeChild(parent.lastChild);
    }
}

replaceDcheckbox.addEventListener("click", replaceDgrade)
replaceFcheckbox.addEventListener("click", replaceFgrade)
submit_button.addEventListener("click", displayResult);
