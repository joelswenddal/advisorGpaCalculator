"use strict";

/*
const priorCreditHours = document.getElementById("priorCreditHours");
const totalQualityPoints = document.getElementById("totalQualityPoints");
const currentOverallGPA = document.getElementById("currentOverallGPA");
const currentCreditHours = document.getElementById("currentCreditHours");
const targetTermGPA = document.getElementById("targetTermGPA");
*/
let submit_button = document.getElementById("submit_button")

let section = document.getElementById("output_section");
/*console.log(priorCreditHours.value)*/

function calculateTargetGPAregular() {

    const priorCreditHours = document.getElementById("priorCreditHours").value;
    const totalQualityPoints = document.getElementById("totalQualityPoints").value;
    const currentOverallGPA = document.getElementById("currentOverallGPA").value;
    const currentCreditHours = document.getElementById("currentCreditHours").value;
    const targetTermGPA = document.getElementById("targetTermGPA").value;

    let target_credit_hours = parseInt(priorCreditHours) + parseInt(currentCreditHours);
    console.log(target_credit_hours);
    let target_quality_pts = target_credit_hours * parseFloat(targetTermGPA);
    let needed_quality_pts = target_quality_pts - parseFloat(totalQualityPoints);
    console.log(needed_quality_pts);
    let target_GPA = needed_quality_pts / parseInt(currentCreditHours);
    console.log(target_GPA);
    return target_GPA;

}


function display(event) {

    /*display result in output section*/
    let result_div = document.createElement("div");
    result_div.setAttribute("id", "output");
    /*append the result div to the section element and calculate result on submission*/
    section.append(result_div);
    let resultGPA = calculateTargetGPAregular()
    result_div.innerText = "Target GPA for this semester is: " + resultGPA;
    /*event.preventDefault();*/

}

submit_button.addEventListener("click", display);
