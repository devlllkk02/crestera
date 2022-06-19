export const getNotesAndBoards = (setItems) => {
  fetch("http://localhost:5000/getnotesandboards", {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
        // console.log(result.sortednotesandboards);
      setItems(result.sortednotesandboards);
    })
    .catch((error) => console.log(error));
};

export const getRecommendedNotesAndBoards = (setRecommendedItems) => {
  fetch("http://localhost:5000/getrecommendednotesandboards", {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
        // console.log(result.sortednotesandboards);
      setRecommendedItems(result.sortednotesandboards);
    })
    .catch((error) => console.log(error));
};
