export const userLocal = {
  //input item to local storage
  set: (inforUser) => {
    let json = JSON.stringify(inforUser);
    localStorage.setItem("inforUser", json);
  },

  //get information from local storage
  get: () => {
    let json = localStorage.getItem("inforUser");
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },

  //delete item in local storage
  delete: () => {
    localStorage.removeItem("inforUser");
  },
};
