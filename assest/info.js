document.addEventListener("DOMContentLoaded", function (){
  var inputValue = localStorage.getItem("accountNumber");
  console.log("Giá trị từ input là: " + inputValue);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  // Construct the URL with the account number as a query parameter
  const apiUrl =
    "http://10.0.170.132:8088/v1/front-service/investor/get-info?accountNumber=" + inputValue;

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Có lỗi khi gửi yêu cầu: " + response.status);
      }
      return response.json();
    })
    .then((json) => {
      document.getElementById("accountNumber").innerText = json.accountNumber;
      document.getElementById("fullName").innerText = json.fullName;
      document.getElementById("identity").innerText = json.identity;
      document.getElementById("identityIssuanceDate").innerText =
        json.identityIssuanceDate;
      document.getElementById("identityIssuancePlace").innerText =
        json.identityIssuancePlace;
    })
    .catch((error) => console.error(error));
});
