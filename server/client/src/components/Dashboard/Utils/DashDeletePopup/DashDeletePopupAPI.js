//Dash Delete Popup API

import { toast } from "react-toastify";

export const deleteANote = (noteId, setUpdated) => {
  fetch(`/deletenote/${noteId}`, {
    method: "delete",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.error) {
        toast.error(result.error);
      } else {
        setUpdated(true);
      }
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
      console.log(result);
      if (result.error) {
        toast.error(result.error);
      } else {
        setUpdated(true);
      }
    })
    .catch((error) => console.log(error));
};
