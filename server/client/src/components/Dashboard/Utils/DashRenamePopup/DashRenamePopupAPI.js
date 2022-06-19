//Dash Create Popup API
import { toast } from "react-toastify";
import { ToastProperties } from "../../../../utils/ToastProperties";

//Get a note
export const getANote = (noteId, setItem, setFileName) => {
  fetch(`/note/${noteId}`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setItem(result);
      setFileName(result.fileName);
    })
    .catch((error) => console.log(error));
};

//Rename a note
export const renameANote = (noteId, fileName, setUpdated) => {
  fetch(`/updatenote/${noteId}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      fileName: fileName,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      setUpdated(true);
    })
    .catch((error) => console.log(error));
};

//Get a board
export const getABoard = (boardId, setItem, setFileName) => {
  fetch(`/board/${boardId}`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      setItem(result);
      setFileName(result.fileName);
    })
    .catch((error) => console.log(error));
};

//Rename a board
export const renameABoard = (boardId, fileName, setUpdated) => {
  fetch(`/updateboard/${boardId}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      fileName: fileName,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      setUpdated(true);
    })
    .catch((error) => console.log(error));
};
