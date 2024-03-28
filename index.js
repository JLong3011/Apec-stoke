document.getElementById('login__signInButton').addEventListener('click', function() {
  var inputValue = document.getElementById("accountInput").value;
  console.log("Giá trị từ input là: " + inputValue);
  
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      const todo = json.find(todo => todo.id.toString() === inputValue); // Find the todo with matching id
      if (todo) {
        console.log('Số tài khoản hợp lệ! Chuyển sang bước tiếp theo...');
        window.location.href = 'filled.html?accountNumber=' + encodeURIComponent(inputValue);
      } else {
        console.log('Số tài khoản không hợp lệ! Vui lòng kiểm tra lại.');
      }
    })
});
