export const getBoards = (setItems) => {
  fetch("/getboards", {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setItems(result.boards);
    })
    .catch((error) => console.log(error));
};

export const getRecommendedBoards = (setRecommendedItems) => {
  fetch("/getrecommendedboards", {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setRecommendedItems(result.sortedboards);
    })
    .catch((error) => console.log(error));
};
