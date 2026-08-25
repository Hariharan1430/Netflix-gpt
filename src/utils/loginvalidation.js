export const formvalidation = (name, email, password, isSignIn) => {
  const nameRegex = /^[A-Za-z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!isSignIn && !nameRegex.test(name.trim())) {
    return "Name must contain at least 3 letters.";
  }

  if (!emailRegex.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  if (!passwordRegex.test(password.trim())) {
    return "Password must be at least 8 characters and contain uppercase, lowercase, and a number.";
  }

  return null;
};