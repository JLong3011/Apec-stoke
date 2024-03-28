var checker = document.getElementById('checkMe');
var sendbtn = document.getElementById('hasChecked');
hasChecked.disabled = true;
checker.onchange = function() {
  sendbtn.disabled = false;
};

