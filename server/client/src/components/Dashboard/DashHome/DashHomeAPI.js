export const getNotesAndBoards = (setItems) => {
  fetch("/getnotesandboards", {
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
  fetch("/getrecommendednotesandboards", {
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
