export const fetchData = (method = "GET", endpoint, accessToken) => {
  const bearer = `Bearer ${accessToken}`;

  const options = {
    method: method,
    headers: {
      Authorization: bearer,
    },
  };

  return fetch(endpoint, options)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};
