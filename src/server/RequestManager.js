import { BASE_URL } from "../util/Configuration";

const makeRequest = (item) => {
  const url = `${BASE_URL}${item.url}`;
  let request = {};

  // TOKEN NULL CASE
  if (item.token !== null) {
    request = {
      method: item.method,
      mode: "cors",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${item.token}`,
      },
    };
  } else {
    request = {
      method: item.method,
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  }

  // HANDLE METHODS PUT && POST
  const { params } = item;
  if (params)
    if (item.method === "POST" || item.method === "PUT")
      request.body = JSON.stringify(params);

  // RETURN DATA
  try {
    return fetch(url, request)
      .then((result) => {
        return {
          status: result.status,
          data: result.json(),
        };
      })
      .catch((err) => {
        return { status: err };
      });
  } catch (error) {
    return { status: error };
  }
};

// GET METHOD
export const get = (url, token, params) =>
  makeRequest({ url, params, token, method: "GET" });

// POST METHOD
export const post = (url, token, params) =>
  makeRequest({ url, params, token, method: "POST" });

// PUT METHOD
export const put = (url, token, params) =>
  makeRequest({ url, params, token, method: "PUT" });

// DELETE METHOD
export const remove = (url, token, params) =>
  makeRequest({ url, params, token, method: "DELETE" });
