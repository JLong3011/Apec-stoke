let apiUser = "http://localhost:3000/user";

//login
const accountNumber = document.querySelector("accountNumber");
const bntLogin = document.querySelector("login__signInButton");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.accountNumber == "") {
    alert("Vui long nhap so tai khoan");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.accountNumber == accountNumber
      );
      if (user) {
        alert("Login success");
        window.location.href = "filled.html";
      } else {
        alert("Login failed");
      }
    });
  }
});
