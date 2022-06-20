//Dash Delete Popup API

export const deleteANote = (noteId, setUpdated) => {
  fetch(`/deletenote/${noteId}`, {
    method: "delete",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setUpdated(true);
    })
    .catch((error) => console.log(error));
};

export const deleteABoard = (boardId, setUpdated) => {
  fetch(`/deleteboard/${boardId}`, {
    method: "delete",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setUpdated(true);
    })
    .catch((error) => console.log(error));
};
