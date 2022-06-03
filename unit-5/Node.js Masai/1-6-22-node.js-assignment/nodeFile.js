const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    fs.readdir("./", (error, files) => {
      if (error) {
        console.log(error);
      }
      files.map((file) => {
        if (file === "public")
          return res.write(`<li><a href=/${file}>${file}</a></li>`);
        return res.write(`<li>${file}</li>`);
      });
      res.end();
    });
  } else if (req.url === "/public") {
    fs.readdir("./public", (error, files) => {
      if (error) console.log(error);
      files.map((file) => {
        if (file === "other")
          return res.write(`<li><a href=/public/${file} >${file}</a></li>`);
        return res.write(`<li>${file}</li>`);
      });
      res.end();
    });
  } else if (req.url === "/public/other") {
    fs.readdir("./public/other", (error, files) => {
      if (error) console.log(error);
      files.map((file) => {
        return res.write(`<li>${file}</li>`);
      });
      res.end();
    });
  }
});

server.listen(8080, () => {
  console.log("Server stared on http://localhost:8080");
});
