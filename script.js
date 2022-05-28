function onChange() {
  const password = document.querySelector("input[name=password]");
  const confirm = document.querySelector("input[name=confirm]");
  if (confirm.value === password.value) {
    confirm.setCustomValidity("");
    document.getElementsByClassName("notmatch")[0].innerHTML = " ";
  } else {
    confirm.setCustomValidity("Passwords do not match");
    document.getElementsByClassName("notmatch")[0].innerHTML = "Not Match";
  }
}
