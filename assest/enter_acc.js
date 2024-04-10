document.getElementById("signInButton").addEventListener("click", function () {
  var inputValue = document.getElementById("accountInput").value;
  console.log("Giá trị từ input là: " + inputValue);

  const requestOptions = {
      method: "GET",
      redirect: "follow"
  };

  // Construct the URL with the account number as a query parameter
  const apiUrl = "http://10.0.170.132:8088/v1/front-service/investor/get-info?accountNumber=" + inputValue;

  fetch(apiUrl, requestOptions)
      .then((response) => response.text())
      .then((res) => {
        console.log(res)
        if(res.status = 500){
          swal({
            title: "Sai tài khoản, vui lòng nhập lại",
            type: "error",
            confirmButtonClass: "btn-danger",
          });
          localStorage.clear();
          return;
        }else{
          localStorage.setItem("accountNumber", inputValue);
        }
      }).then(() =>
        window.location.href = "filled.html")
      .catch((error) => console.error(error));
});

var input = document.getElementById("accountInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("signInButton").click();
  }
});
function goHome() {
  window.location.href = "/";
  localStorage.clear();
}
document.addEventListener("DOMContentLoaded", function (){
  document.getElementById("accountInput").addEventListener("input", updateButtonState);
  // Function to update the button state based on checkbox and PIN code input
  function updateButtonState() {
    var button = document.getElementById("signInButton");
    function isAccFilled() {
      var acc = document.getElementById("accountInput").value.trim();
      return acc !== "";
    }
    if (isAccFilled()) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "disabled");
    }
  }
})