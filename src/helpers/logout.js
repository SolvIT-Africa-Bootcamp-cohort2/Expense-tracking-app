export const logout = async () => {
  await localStorage.removeItem("token");
  window.location = "home";
};
