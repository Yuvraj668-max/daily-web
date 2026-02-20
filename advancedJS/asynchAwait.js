function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "yuvraj",
        url: "https://www.udemy.com/course/web-dev-master/learn/lecture/45708197#learning-tools",
      });
    }, 3000);
  });
}
// if we send resolve to the asynch function try block will be executed
// if we send reject to the aysnch function catch block will be executed

async function getData() {
  try {
    console.log("fetching user data...");
    const userData = await fetchData();
    console.log("User data:", userData);
    console.log("data fetched successfully");
  } catch (error) {
    console.log("error fetching data", error);
  }
}
getData();
