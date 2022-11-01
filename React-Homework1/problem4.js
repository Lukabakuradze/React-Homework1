function addAsync(x, y) {
    return new Promise((resolve, reject) => {
      if (
        typeof x == "number" &&
        typeof x != "undefined" &&
        typeof y == "number" &&
        typeof y != "undefined"
      ) {
        resolve("true");
      } else {
        reject("false");
      }
    });
  }
  addAsync(1, 3)
    .then((suc) => console.log(suc))
    .catch((error) => console.log(error));