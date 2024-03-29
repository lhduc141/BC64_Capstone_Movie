export const userLocal = {
  set: (inforUser) => {
    let json = JSON.stringify(inforUser);
    localStorage.setItem("inforUser", json);
  },
  get: () => {
    let json = localStorage.getItem("inforUser");
    if (json) return JSON.parse(json);
    return null;
  },
  delete: () => {
    localStorage.removeItem("inforUser");
  },
};
