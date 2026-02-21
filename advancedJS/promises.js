function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("data fetched");
      } else {
        reject("data not fetched");
      }
    }, 3000);
  });
}
// let response = fetchData();
// console.log(response);
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

let apple = new Promise((resolve, reject) => {
  let abc = true;
  if (abc) {
    resolve("hello everyone");
  } else {
    reject("not hello to you");
  }
});
apple
  .then((data) => {
    console.log(data);
    return `from yuvraj`;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
