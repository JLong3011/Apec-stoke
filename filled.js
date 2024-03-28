let apiUser = "https://jsonplaceholder.typicode.com/posts/1";

const accountNumber = document.getElementById("accountNumber");
const fullName = document.getElementById("fullName");
const identity = document.getElementById("identity");
const identityDate = document.getElementById("identityDate");
const identityPlace = document.getElementById("identityPlace");
const phoneNumber = document.getElementById("phoneNumber");

//getUser
const getUser = async () => {
    const response = await fetch(apiUser);
    const data = await response.json();
    return data;
};

getUser().then((data) => {
    const id = data.find(id );
});

console.log(user);

//hien thi bang
accountNumber.innerHTML = user.id;