document.getElementById("hasChecked").addEventListener("click", function () {
  var pinCode = document.getElementById("number-input").value;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var accountNumber = localStorage.getItem("accountNumber");
  const raw = JSON.stringify({
    accountNumber: accountNumber,
    pinCode: pinCode,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "http://10.0.170.132:8088/v1/front-service/investor/sign-contract",
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Có lỗi khi gửi yêu cầu: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Có lỗi xảy ra:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to check if the checkbox is checked
  function isCheckboxChecked() {
    return document.getElementById("checkMe").checked;
  }

  // Function to check if the PIN code input is filled
  function isPinCodeFilled() {
    var pinCode = document.getElementById("number-input").value.trim();
    return pinCode !== "";
  }

  // Function to update the button state based on checkbox and PIN code input
  function updateButtonState() {
    var button = document.getElementById("hasChecked");
    if (isCheckboxChecked() && isPinCodeFilled()) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "disabled");
    }
  }

  // Add event listeners for checkbox and PIN code input
  document.getElementById("checkMe").addEventListener("change", updateButtonState);
  document.getElementById("number-input").addEventListener("input", updateButtonState);

  // Initialize button state
  updateButtonState();
});
function goHome() {
  window.location.href = "/";
  localStorage.clear();
}
