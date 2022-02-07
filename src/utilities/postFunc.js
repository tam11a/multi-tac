import { backendURL } from "./backendURL";

export const postFunc = async (route, params) => {
  const response = await fetch(backendURL + route, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return response;
};
