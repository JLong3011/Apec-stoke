let apiUser = "http://localhost:3000/user";

//login
const accountNumber = document.getElementById("accountNumber");
const bntLogin = document.getElementById("signInButton");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click", function (e) {
  e.preventDefault();
  if (accountNumber.value == "") {
    alert("Vui long nhap so tai khoan");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) => user.accountNumber == accountNumber.value
      );
      if (user) {
        // login success
        alert("Login success");
        window.location.href = "filled.html";
      } else {
        // login failed
        alert("Login failed. Please try again.");
        window.location.href = "login.html";
      }
    });
  }
});
