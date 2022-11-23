console.log('Script Ready');

const submitBtn = document.getElementById('taskForm');

function validateTaskForm(event){
    event.preventDefault();
    const formName = document.getElementById('taskName');
    const formDesc = document.getElementById('taskDescription');
    const formAssign = document.getElementById('taskAssignedTo');
    const formDate = document.getElementById('taskDueDate');
    //const alertMessage = document.getElementById('alertMessage');

    if (formName.value === "" || formName.value.length > 8) {
        alert('Name must be filled in and less than 8 characters!');
        //alertMessage.innerHTML = "Invalid name input";
        //alertMessage.style.display = "block";
    } else {
        console.log('does this work?')
    }
    if (formDesc.value === "" || formDesc.value.length > 15) {
        alert('Description must be filled in and less than 15 characters!');
        return false;
    } else {
        console.log('does this work?')
    }
    if (formAssign.value === "" || formAssign.value.length > 8) {
        alert('Assignment must be filled in and less than 8 characters!');
        return false;
    } else {
        console.log('does this work?')
    }
    if (formDate.value === "" || formDate.value.length > 8) {
        alert('Name must be filled in and less than 8 characters!');
        return false;
    } else {
        console.log('does this work?')
    }
    
}
/*
function validateForm() {
    let x = document.forms["taskForm"]["taskName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }*/

submitBtn.addEventListener('submit', validateTaskForm);