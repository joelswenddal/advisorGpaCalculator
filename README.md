# Advisor GPA Calculator
GPA calculation browser app for Academic Advisors to help students with academic goal-setting

## Table of contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contact](#contact)

## General info
I designed this app for use by student support staff at the university where I worked. Learning specialists often need to help probation students with goal-setting to improve their grades, but the calculation to help students identify their target GPA is somewhat error-prone; staff often struggled to remember the steps if they didn't make the calculations very often. A simple tool was needed which could run in the browser and which would eliminate mistakes.

The single-page app collects 4 data points:

* Student's prior attempted credit hours (from their transcript)
* Student's total 'quality points' (from their transcript)
* Credit hours being taken in the current semester
* Overall target GPA (e.g. if they are on Probation, they may need a particular GPA)

With this data, the app outputs a term GPA result that the student needs to achieve in the current semester to reach their overall target GPA. It also allows for grade replacement of D and F grades if a student is trying to replace a low grade in a prior semester.

Although this was made with a particular advising context in mind, there are many schools that calculate GPA in a similar manner, so small changes to the Javascript code should allow for it to be used in other university advising contexts.

It should be noted that I designed this as an outside project at the same time that I was taking a Web Development at Oregon State University. My motivation was to practice my skills at manipulating DOM elements in response to user activity. I was happy to be able to make something that would be useful to my colleagues while strengthing my front-end development skills.

## Technologies

This project was created with:

* Javascript (file name: script.js)
* HTML (file name: index.html)
* CSS (file name: style.css)

## Setup

To run this project, download the files listed above and locate them in the same directory. Open index.html in a browser.

## Contact
For suggestions or questions related to use or adaptation of this app, please contact: joel.swenddal@gmail.com


