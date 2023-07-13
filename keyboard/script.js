function appendCharacter(character) {
    var inputField = document.getElementById("input-field");
    inputField.value += character;
  }
  
  function backspace() {
    var inputField = document.getElementById("input-field");
    inputField.value = inputField.value.slice(0, -1);
  }
  
  function clearInput() {
    var inputField = document.getElementById("input-field");
    inputField.value = "";
  }
  