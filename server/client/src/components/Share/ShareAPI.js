//Get a note
export const getANote = (noteId, setFile) => {
  fetch(`/note/${noteId}`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setFile(result);
    })
    .catch((error) => console.log(error));
};

//Get a board
export const getABoard = (boardId, setFile) => {
  fetch(`/board/${boardId}`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setFile(result);
    })
    .catch((error) => console.log(error));
};
