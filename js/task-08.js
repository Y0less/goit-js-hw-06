const loginForm = document.querySelector(".login-form");
// console.log(loginForm);
loginForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value && password.value) {
    const loginInfo = { email: email.value, password: password.value };
    console.log(loginInfo);
    event.currentTarget.reset();
  } else {
    window.alert("Fill in all fields, please!");
  }
}

//  Another (opposite) variant to handle login form logic
//   if (!email.value || !password.value) {
//     window.alert("Fill in all fields, please!");
//   } else {
//     const loginInfo = { email: email.value, password: password.value };
//     console.log(loginInfo);
//     event.currentTarget.reset();
//   }
