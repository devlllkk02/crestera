export const getUserCircles = (setUserCircles) => {
    fetch("http://localhost:5000/getusercircles", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getUserCircle("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
          // console.log(result.sortednotesandboards);
        setUserCircles(result.sortedusercircles);
      })
      .catch((error) => console.log(error));
  };