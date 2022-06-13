export const getNotes = (setItems) => {
  fetch("http://localhost:5000/getnotes", {
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
