document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");
  
    emailError.style.display = "none";
    passwordError.style.display = "none";
    successMessage.style.display = "none";
  
    let isValid = true;
  
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = "Por favor, insira um e-mail válido.";
      emailError.style.display = "block";
      isValid = false;
    }
  
    if (!password || password.length < 6) {
      passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
      passwordError.style.display = "block";
      isValid = false;
    }
  
    if (isValid) {
      successMessage.textContent = "Login efetuado com sucesso!";
      successMessage.style.display = "block";
    }
  });
  