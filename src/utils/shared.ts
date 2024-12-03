export const appLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
    // Cookies.remove("access");
  };

  export const stringifyJson = <T>(data: T) => {
    let result;
    try {
      result = JSON.stringify(data);
    } catch (error) {
      result = "";
    }
  
    return result;
  };

  export const parseJson = <T>(data: string): T => {
    let result;
    try {
      result = JSON.parse(data);
    } catch (error) {
      result = {};
    }
  
    return result;
  };

  export const saveAdminDetails = (data: Partial<IAdmin>) => {
    let result;
    try {
      result = stringifyJson(data);
      localStorage.setItem("user-details", result);
    } catch (error) {
      result = "";
    }
  
    return result;
  };

  export const getAdminDetails = (): Partial<IAdmin> => {
    let result;
    try {
      const userDetails = localStorage.getItem("user-details") || "{}";
      return parseJson<Partial<IAdmin>>(userDetails);
    } catch (error) {
      result = {} as Partial<IAdmin>;
    }
  
    return result;
  };
  