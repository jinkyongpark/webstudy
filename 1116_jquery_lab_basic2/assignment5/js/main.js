function Validation(isValid, message) {
  this.isValid = isValid;
  this.message = message;
}

function validateId(id) {
  var mock_ids = ["abc", "cde", "mock", "hungry", "thisisid", "hello", "world"];

  var isValid = true;
  var message = "";

  /* add code to check id must be of length 5 to 20 */
  /* if id is out of length constraint, isValid = false and append meesage - "id must be of length 5 to 20" */
  if(id.length < 5 || id.length > 20) {
    isValid = false;
    message += "id must be of length 5 to 20"
  }

  /* add code to check id must be lowercase */
  /* if id is not lowercase, isValid = false and append message - id must be lowercase" */
  if(id !== id.toLowerCase()) {
    isValid = false;
    message += " id must be lowercase"
  }

  /* add code to check whether id is duplicated with a item of mock_ids array */
  /* if duplicated, isValid = false and append message - id is duplicated" */
  if(mock_ids.indexOf(id) !== -1) {
    isValid = false;
    message += " id is duplicated"
  }

  // if id is valid, return new Validation(true, "id is valid")
  // else, return new Validation(false, message)
  if(isValid === true) {
    return new Validation(true, "id is valid");
  } else {
    return new Validation(false, message);
  }
}

function validatePassword(password) {
  /* check constraints here and return Validation object appropriately*/
  var isValid = true;
  var message = "";

  /* add code to check id must be of length 5 to 20 */
  /* if id is out of length constraint, isValid = false and append meesage - "id must be of length 5 to 20" */
  if(password.length < 5 || password.length > 20) {
    isValid = false;
    message += "password must be of length 5 to 20"
  }

  // if password is valid, return new Validation(true, "password is valid")
  // else return new Validation(false, message)
}

function validateEmail(email) {
  /* check constraints here and return Validation object appropriately*/

  // if password is valid, return new Validation(true, "email is valid")
  // else return new Validation(false, message)
}

function validateMessage(message) {
  /* check constraints here and return Validation object appropriately*/

  // if password is valid, return new Validation(true, "email is valid")
  // else return new Validation(false, message)
}

function keyUpId() {
  /* get ID from the HTML tag - Hint (id = getElementById...) */
  var id = document.getElementById('id').value;

  /* add or remove a "hidden" class value*/
  if(id.length === 0) {
    document.getElementById('id-check').classList.add('hidden');
  } else {
    document.getElementById('id-check').classList.remove('hidden');
  }

  var result = validateId(id);

  /* set text of <p> tag which have "id-check" id value as result.message */
  document.getElementById('id-check').innerHTML = result.message;
  if(result.isValid === true) {
    /* add class value (green) */
    /* remove class value (red) */
    document.getElementById('id-check').classList.add('green');
    document.getElementById('id-check').classList.remove('red');
  } else {
    /* remove class value (green) */
    /* add class value (red) */
    document.getElementById('id-check').classList.remove('green');
    document.getElementById('id-check').classList.add('red');
  }
}

function keyUpPassword() {
  /* add code here */
  /* similar implementation wtih keyUpID function */
}

function keyUpEmail() {
  /* add code here */
  /* similar implementation wtih keyUpID function */
}

function keyUpMessage() {
  /* add code here */
  /* 140-character limit : You have reached the limit */
  /* you should show how many characters left dynamically if text is under the limit*/
}

function performSubmit() {
  /* check id, password, email */
  /* Hint : utilize validateId, validatePassword, validateEmail functions */

  //if all contents are valid
  //alert("registration succeed!")

  //at least one content is invalid
  //alert("registration failed :")
}
