import { backendURL } from "./backendURL";

export const loginFunc = async (uname, password) => {
  // console.log(backendURL);
  const response = await fetch(backendURL + "/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uname: uname, password: password }),
  });
  return response;
};

/*login("Tam", "123456")
.then((data) => data.json())
.then((data) => {
console.log(data);
})
.catch((error) => {
console.error(error);
});*/
