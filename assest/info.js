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
      document.getElementById("accountNumber").innerText = json.data.accountNumber;
      document.getElementById("fullName").innerText = json.data.fullName;
      document.getElementById("identity").innerText = json.data.cardNo;
      document.getElementById("identityIssuanceDate").innerText = timestampToDDMMYYYY(json.data.issuanceDate);
      document.getElementById("identityIssuancePlace").innerText = json.data.issuancePlace;
      document.getElementById("phoneNumber").innerText = json.data.phoneNumber;
      document.getElementById("type").innerText = json.data.type ==='INDIVIDUAL'?'Cá nhân':'Doanh nghiệp';
    })
    .catch((error) => console.error(error));
});
function timestampToDDMMYYYY(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;
  return formattedDay + '/' + formattedMonth + '/' + year;
}