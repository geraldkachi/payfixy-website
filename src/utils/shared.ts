export const appLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
    // Cookies.remove("access");
  };