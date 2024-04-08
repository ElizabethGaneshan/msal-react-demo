export const fetchData = async ({
  method = "POST",
  endpoint,
  accessToken,
  requestData,
}) => {
  const bearer = `Bearer ${accessToken}`;

  const options = {
    method: method,
    headers: {
      Authorization: bearer,
      "content-type": "application/json",
    },
    body: JSON.stringify(requestData),
  };

  console.log(method, endpoint, accessToken, requestData);
  try {
    const resp = await fetch(endpoint, options);
    console.log(resp.json());
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};
