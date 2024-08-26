document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".interview-form");
    const inputs = form.querySelectorAll(".form-input");
    const phoneInput = form.querySelector('input[placeholder="Телефон"]');
  
    function phoneMask(event) {
      let value = event.target.value.replace(/\D/g, "");
  
      if (value.length > 11) {
        value = value.substring(0, 11);
      }
  
      value = value.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/, function (_, p1, p2, p3, p4, p5) {
        let result = "+7"; 
        if (p2) result += " (" + p2; 
        if (p3) result += ") " + p3; 
        if (p4) result += "-" + p4;
        if (p5) result += "-" + p5; 
        return result; 
      });
  
      event.target.value = value;
    }
  
    phoneInput.addEventListener("input", phoneMask);
  
    form.addEventListener("submit", function (event) {
      let hasError = false;
  
      inputs.forEach((input) => {
        const errorMessage = input.parentElement.querySelector(".error-message");
        if (input.value.trim() === "") {
          hasError = true;
          errorMessage.textContent = "Это поле обязательно для заполнения";
          input.parentElement.classList.add("invalid");
          input.parentElement.classList.remove("valid");
        } else {
          errorMessage.textContent = "";
          input.parentElement.classList.add("valid");
          input.parentElement.classList.remove("invalid");
        }
  
        if (input.placeholder === "Email" && input.value.trim() !== "") {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value)) {
            hasError = true;
            errorMessage.textContent = "Введите корректный email";
            input.parentElement.classList.add("invalid");
            input.parentElement.classList.remove("valid");
          }
        }
  
        if (input.placeholder === "Телефон" && input.value.trim() !== "") {
          const phoneDigits = input.value.replace(/\D/g, ""); 
          if (phoneDigits.length < 11) {
            hasError = true;
            errorMessage.textContent = "Введите корректный номер телефона";
            input.parentElement.classList.add("invalid");
            input.parentElement.classList.remove("valid");
          }
        }
      });
  
      if (hasError) {
        event.preventDefault();
      }
    });
  });
  