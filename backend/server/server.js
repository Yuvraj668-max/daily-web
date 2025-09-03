const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : "req.url"
  );

  const extName = toString(path.extname(filePath)).toLowerCase;


  const mimeTypes = {
    '.html':'t'
  }
});

server.listen(port, () => {
  console.log(`server is listening on the port ${port}`);
});
