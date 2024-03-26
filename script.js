var checker = document.getElementById('checkMe');
var sendbtn = document.getElementById('hasChecked');
hasChecked.disabled = true;
checker.onchange = function() {
  sendbtn.disabled = false;
};

let apiUser = "http://localhost:3000/user";

function login() {
  getUser(handleLogin)
}

function getUser(callback) {
  fetch(apiUser).then(function(res){
    return res.json().then(callback);
  });
}
function handleLogin(data) {
  let accountNumber = document.getElementById('accountNumber').value;
  data.forEach(data =>{
    if(data.accountNumber === accountNumber){
      alert("Login successful");
      window.location.href = "filled.html";
    }
  });
}