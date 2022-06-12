export const getBoards = (setItems) => {
  fetch("http://localhost:5000/getboards", {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setItems(result.notes);
    })
    .catch((error) => console.log(error));
};
