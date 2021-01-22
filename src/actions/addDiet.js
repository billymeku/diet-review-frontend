export const addDiet = (diet) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/diets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ diet: diet }),
    })
      .then((resp) => resp.json())
      .then((diet) => {
        dispatch({ type: "ADD_DIET", payload: diet });
      });
  };
};