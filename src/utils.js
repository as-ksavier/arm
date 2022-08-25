export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve({ userName: "John doe", role: "Admin" });
      } else {
        reject(new Error("Invalid Email or Password"));
      }
    }, 3000);
  });
}

export function isFunc(v) {
  return v instanceof Function;
}
