// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => {
    return document.getElementById(id)
}

// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', () => {  
    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
        const wd = 800
        const hg = 700 
    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
        window.resizeTo(wd, hg)
    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
        window.moveTo(((window.screen.width - wd) / 2), ((window.screen.height - hg) / 2))

    $('submit').addEventListener('click', addEmployee)
    $('cancel').addEventListener('click', cancelForm)
});

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
function cancelForm() {
    window.close()
}

function addEmployee() {

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

$('submit').addEventListener("click", function(event) {	
    event.preventDefault()
    // event.stopPropagation()
});

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
let id = $('id').value
let name = $('name').value
let ext = $('extension').value
let email = $('email').value
let dept = $('department').value


// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
let parentoutput =window.frames[0].parent.getElementById('logindetails')


// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
output.innerHTML = `Future value on investment: $${futureValue.toFixed(2)}`
let stroutput = `ID: ${id} 
Name:  ${name1} 
Extension: ${extension} 
Email: ${email} 
Deparment: ${department}`

parentoutput.innerHTML = stroutput
alert(stroutput)

// CLOSE THE POPUP
window.close();
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
}