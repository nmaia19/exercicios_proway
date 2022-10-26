var storedName = localStorage.getItem("name");
var storedPw = localStorage.getItem("password");
const form = document.getElementById("form-login")

let tentativas = 0

const users = JSON.parse(localStorage.getItem('users'))

console.log(users);

function storeUserData() {
  var newEmail = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var tempUsers = []

  const newUser = {
    email: newEmail,
    password
  }

  if(users != null) {
    tempUsers.push(...users, newUser)
    console.log(tempUsers);
  }else{
    tempUsers.push(newUser)
  }

  localStorage.setItem("users", JSON.stringify(tempUsers));

  // VALIDAÇÕES POSTERIORES

  // var lowerCaseLetters = /[a-z]/g;
  // var upperCaseLetters = /[A-Z]/g;
  // var numbers = /[0-9]/g;
  // if (newEmail.value.length == 0) {
  //   alert("Please fill in email");
  // } else if (password.value.length == 0) {
  //   alert("Please fill in password");
  // } else if (newEmail.value.length == 0 && password.value.length == 0) {
  //   alert("Please fill in email and password");
  // } else if (password.value.length > 8) {
  //   alert("Max of 8");
  // } else if (!password.value.match(numbers)) {
  //   alert("please add 1 number");
  // } else if (!password.value.match(upperCaseLetters)) {
  //   alert("please add 1 uppercase letter");
  // } else if (!password.value.match(lowerCaseLetters)) {
  //   alert("please add 1 lovercase letter");
  // } else {
  //   localStorage.setItem("name", newEmail.value);
  //   localStorage.setItem("password", password.value);
  //   alert("Your account has been created");
  // }
}



function login() {
  
  form.addEventListener("click", function(event){event.preventDefault()});  

  var userName = document.getElementById("userEmail");
  var userPw = document.getElementById("userPassword");

  console.log(userName.value, userPw.value);

  if (autenticar(userName.value, userPw.value)) {
    tentativas = 0
    alert("Logou!");
  } else {
    tentativas++
    if (tentativas == 3) {
      document.getElementById('login_btn').disabled = true
      setTimeout(() => {
        document.getElementById('login_btn').disabled = false
        tentativas = 0
      }, 5000)
      alert("Erro no login");
    }
  }
}

function autenticar(email, password) {

  let userFound = false
  users.forEach(user => {
    if (user.email === email && user.password === password) {
      userFound = true
    }
  })
  return userFound
}