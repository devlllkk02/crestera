export const GetCircles = (setUserCircles) => {
    fetch("http://localhost:5000/v1/crestera/circles/", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
          // console.log(result.sortednotesandboards);
        setUserCircles(result.sortedusercircles);
      })
      .catch((error) => console.log(error));
  };