export const GetCircles = (setUserCircles) => {
    fetch("/v1/crestera/circles/", {
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