export const getNotes = (setItems) => {
  fetch("/getnotes", {
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

export const getRecommendedNotes = (setRecommendedItems) => {
  fetch("/getrecommendednotes", {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setRecommendedItems(result.sortednotes);
    })
    .catch((error) => console.log(error));
};
