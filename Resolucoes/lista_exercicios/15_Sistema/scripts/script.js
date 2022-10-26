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

}



function login() {
  
  form.addEventListener("click", function(event){event.preventDefault()});  

  var userName = document.getElementById("userEmail");
  var userPw = document.getElementById("userPassword");

  if (autenticar(userName.value, userPw.value)) {
    tentativas = 0
    alert("Logou!");
  } else {
    tentativas++
    console.log(tentativas);
    if (tentativas == 3) {
      document.getElementById('login_btn').disabled = true
      setTimeout(() => {
        document.getElementById('login_btn').disabled = false
      }, 5000)
      tentativas = 0
      // alert("Erro no login");
      console.log("erro no login");
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