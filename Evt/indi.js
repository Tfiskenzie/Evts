const signupForm = document.getElementById('individual-signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullName = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  alert(`Sign-Up Successful!\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}`);
  // Here, you can add code to handle form submission to your backend.
});
