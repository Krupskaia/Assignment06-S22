// HANDLE THE LOAD EVENT OF THE WINDOW

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP


const $ = (id) => {
    return document.getElementById(id);
};


window.addEventListener('load', () => {    
    $('btnAddEmployee').addEventListener('click', addEmployee)
});

function addEmployee() {
    window.open('add-employee.html', 'popup', 'width=1000,height=800')
    // window.location.href = 'add-employee.html'
}