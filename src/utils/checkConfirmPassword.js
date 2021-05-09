export const checkConfirmPassword = (password, confirmPassword) => (
  password.trim() === confirmPassword.trim()
)
