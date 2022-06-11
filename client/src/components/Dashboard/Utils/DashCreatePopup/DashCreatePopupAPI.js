import { toast } from "react-toastify";
import { ToastProperties } from "../../../../utils/ToastProperties";

export const createNote = (fileName) => {
  fetch("http://localhost:5000/createnote", {
    method: "post",
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
      if (result.error) {
        toast.error(result.error, ToastProperties);
      } else {
        console.log(result);
      }
    })
    .catch((error) => console.log(error));
};

export const createBoard = (fileName) => {
  fetch("http://localhost:5000/createboard", {
    method: "post",
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
      if (result.error) {
        toast.error(result.error, ToastProperties);
      } else {
        console.log(result);
      }
    })
    .catch((error) => console.log(error));
};
