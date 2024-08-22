document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', function() {
      const formGroup = this.closest('.form-group');
      if (this.value.trim() !== "") {
        formGroup.classList.remove('invalid');
        formGroup.classList.add('valid');
      } else {
        formGroup.classList.remove('valid');
        formGroup.classList.add('invalid');
      }
    });
  });
  