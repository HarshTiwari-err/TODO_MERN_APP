export const getLocal = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
