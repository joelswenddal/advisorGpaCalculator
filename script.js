"use strict";


let submit_button = document.getElementById("submit_button")
let replaceDcheckbox = document.getElementById("gradeReplaceD")
let replaceFcheckbox = document.getElementById("gradeReplaceF")
let section = document.getElementById("output_section");


/**
 * This function collects user input for prior credit hours,
 * total quality points, current credit hours, and target
 * GPA and returns a rounded target GPA. Adjusts and updates
 * relevant DOM elements in the process.
 * @returns A target GPA rounded to three decimal places
 */
function calculateTargetGPAregular() {

    let priorCreditHours = parseInt(document.getElementById("priorCreditHours").value);
    let totalQualityPoints = parseFloat(document.getElementById("totalQualityPoints").value);
    const currentCreditHours = parseInt(document.getElementById("currentCreditHours").value);
    const targetTermGPA = parseFloat(document.getElementById("targetTermGPA").value);

    /*calculate current overall GPA and insert into form*/
    let currentOverallGPA = totalQualityPoints / priorCreditHours

    /*if D or F grade replacement, recalculate priorCreditHours
    and totalQualityPoints (in the case of D replacement)*/

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

    if (document.getElementById("creditsToReplaceF")) {
        if (document.getElementById("creditsToReplaceF").value) {
            let creditAdjust = parseInt(document.getElementById("creditsToReplaceF").value);
            console.log(creditAdjust);
            priorCreditHours = priorCreditHours - creditAdjust;
            console.log(priorCreditHours);
        }
    }
    /* delete prior overall GPA output if there is one */
    if (document.getElementById("currentOverallGpa")) {
        document.getElementById("currentOverallGpa").remove();

    }
    /* calculate and display current overall GPA */
    let par = document.getElementById("currentOverallGPA")
    par.innerText = "Current Overall GPA is:"
    let parent = document.getElementById("pastRecordInputForm")
    let currentGpaOutput = document.createElement("p")
    currentGpaOutput.innerText = round(currentOverallGPA, 2).toString()
    currentGpaOutput.setAttribute("id", "currentOverallGpa")
    parent.appendChild(currentGpaOutput)

    /* calculate new target GPA for current semester */
    let target_credit_hours = priorCreditHours + currentCreditHours;
    console.log(target_credit_hours);
    let target_quality_pts = target_credit_hours * targetTermGPA;
    let needed_quality_pts = target_quality_pts - totalQualityPoints;
    console.log(needed_quality_pts);
    let target_GPA = needed_quality_pts / currentCreditHours;
    console.log(target_GPA);
    return round(target_GPA, 2);

}

/**
 * This function rounds a number to a certain number
 * of decimal digits
 * @param {number} number 
 * @param {number} decimalPlaces 
 * @returns The number rounded to the specified 
 * number of decimal places
 */
function round(number, decimalPlaces) {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(Math.floor(number * factorOfTen)) / factorOfTen;
}

/**
 * This function collects input to adjust the GPA
 * calculation in the case that a D grade is being
 * replaced. Used by calculateTargetGPARegular function.
 */
function replaceDgrade() {
    let parent = document.getElementById("gradeReplaceDdiv");

    if (replaceDcheckbox.checked) {

        deleteResult(parent, 2);

        let prompt = document.createElement("p");
        prompt.setAttribute("id", "replaceGradeInstructions");
        prompt.innerText = "Enter number of 'D' credit hours being replaced";
        parent.appendChild(prompt);

        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", "creditsToReplaceD");
        input.setAttribute("min", "0");
        parent.appendChild(input);

    } else {
        deleteResult(parent, 2);
    }
}

/**
 * This function collects input to adjust the GPA
 * calculation in the case that a F grade is being
 * replaced. Used by calculateTargetGPARegular function.
 */
function replaceFgrade() {

    let parent = document.getElementById("gradeReplaceFdiv");

    if (replaceFcheckbox.checked) {
        deleteResult(parent, 2);

        let prompt = document.createElement("p");
        prompt.setAttribute("id", "replaceGradeInstructions");
        prompt.innerText = "Enter number of 'F' credit hours being replaced";
        parent.appendChild(prompt);

        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", "creditsToReplaceF");
        input.setAttribute("min", "0")
        parent.appendChild(input);
    } else {
        deleteResult(parent, 2);
    }
}

/**
 * This function operates at the top level to
 * collect user input and adjust the DOM
 * tree to display the results.
 */

function displayResult() {
    /*delete previous results if they are being displayed*/
    section = document.getElementById("output_section");
    deleteResult(section, 1);

    /*display result in output section*/
    let result_div = document.createElement("p");
    result_div.setAttribute("id", "outputCaption");
    result_div.innerText = "Target GPA for this semester is: ";
    /*append the result div to the section element and calculate result on submission*/
    section.appendChild(result_div);

    let resultGPA = calculateTargetGPAregular();
    let gpa = document.createElement("p");
    gpa.innerText = resultGPA.toString()
    gpa.setAttribute("id", "gpaResult")
    section.appendChild(gpa)

}

/**
 * This function takes a DOM element (a parent) and
 * a number representing a certain number of child elements.
 * If there are more child elements than the limit, then
 * the function removes those elements that exceed the
 * limit.
 * @param {a DOM element} parent 
 * @param {number} limit 
 */
function deleteResult(parent, limit) {

    while (parent.children.length > limit) {
        parent.removeChild(parent.lastChild);
    }
}

replaceDcheckbox.addEventListener("change", replaceDgrade);
replaceFcheckbox.addEventListener("change", replaceFgrade);
submit_button.addEventListener("click", displayResult);
