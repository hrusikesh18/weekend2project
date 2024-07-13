function save(){
  window.alert("Changes have been updated");
}
function cancel(){
  document.getElementById('name').value = "John Doe";
  document.getElementById('email').value = "JohnDoe@gmail.com";
  document.getElementById('pno').value = "7775556662";
  document.getElementById('dob').value = "18 aug 2000";
}

function editField(fieldId) {
  const field = document.getElementById(fieldId);
  field.readOnly = !field.readOnly;
  if (!field.readOnly) {
      field.focus();
  }
}

function editImage() {
  document.getElementById('imageInput').click();
}

function loadImage(event) {
  const image = document.getElementById('profileImage');
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = () => URL.revokeObjectURL(image.src); // Free memory
}