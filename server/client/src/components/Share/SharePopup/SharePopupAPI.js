//Get note users
export const getANoteUsers = (noteId, setItem) => {
  fetch(`/share/note/getusers`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      noteId: noteId,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      setItem(result);
    })
    .catch((error) => console.log(error));
};

//Add user to note
export const addUserToNote = (noteId, userId, setUpdate) => {
  fetch(`/share/note/adduser`, {
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      noteId: noteId,
      userId: userId,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      setUpdate(true);
    })
    .catch((error) => console.log(error));
};

//Remove user from note
export const removeUserFromNote = (noteId, userId, setUpdate) => {
  fetch(`/share/note/removeuser`, {
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      noteId: noteId,
      userId: userId,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      setUpdate(true);
    })
    .catch((error) => console.log(error));
};
