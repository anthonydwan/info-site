const fs = require("fs");
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  // you need response header - set header content type
  res.setHeader("Content-Type", "text/html");

  // you need to end the response
  let path = "./src/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 400;
      break;
  }

  // routing with pure node will need the readFile
  fs.readFile(path, (err, data) => {
    err ? console.log(err) : res.write(data);
    res.end();
  });
});

// When the server is ready, the listen callback function is called.
server.listen(port, "localhost", () => {
  console.log(`Server running at port ${port}.`);
});
