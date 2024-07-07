function editName() {
    let currentName = document.getElementById('name').value;
    let newName = prompt("Please enter your new name:", currentName);
    if (newName) {
      document.getElementById('name').value = newName;
    }
  }
  function editEmail() {
    let currentName = document.getElementById('email').value;
    let newName = prompt("Please enter your new email-id:", currentName);
    if (newName) {
      document.getElementById('email').value = newName;
    }
  }
  function editPh() {
    let currentName = document.getElementById('pno').value;
    let newName = prompt("Please enter your new phone-no:", currentName);
    if (newName) {
      document.getElementById('pno').value = newName;
    }
  }
  function editDob() {
    let currentName = document.getElementById('dob').value;
    let newName = prompt("Please enter your new dob:", currentName);
    if (newName) {
      document.getElementById('dob').value = newName;
    }
  }
  function save(){
    window.alert("Changes have been updated");
  }
  function img() {
    prompt("Please enter your image type:");
  }