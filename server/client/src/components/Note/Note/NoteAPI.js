export const updateNote = (noteId, data) => {
  fetch(`http://localhost:5000/update/${noteId}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      data: data,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      //   setItems(result.notes);
    })
    .catch((error) => console.log(error));
};

export const getNote = (noteId, data) => {
  fetch(`http://localhost:5000/note/${noteId}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      data: data,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
      //   console.log(result);
      //   setItems(result.notes);
    })
    .catch((error) => console.log(error));
};
