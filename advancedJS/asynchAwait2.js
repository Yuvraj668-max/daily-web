function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("post data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("blog data fetched");
    }, 3000);
  });
}
async function getBlogData() {
  try {
    console.log("fetching data");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);

    console.log("data fetched");
  } catch (error) {
    console.log("error fetching data");
  }
}
getBlogData();
