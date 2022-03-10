const logout = async () => {
  await localStorage.removeItem("token");
  window.location = "login";
};

module.exports = {
  logout,
};
