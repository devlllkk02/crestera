//User API
export const getUser = (setUser) => {
  fetch("/getuser", {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => console.log(error));
};
