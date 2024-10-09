const { createServer } = require("node:http");

const hostname = "localhost"; //local host
const port = 3000;

//dung ham nay thi render duoc noi dung website
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n Hoi dan It voi eric");
});

//ham cho server nay chay
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
