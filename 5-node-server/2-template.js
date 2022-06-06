const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "CatFFather";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
  { name: "Front-end" },
];

const server = http
  .createServer((req, res) => {
    const url = req.url;
    res.setHeader("Content-Type", "text/html");
    if (url === "/") {
      ejs
        .renderFile("./template/index.ejs", { name })
        .then((data) => res.end(data));
    } else if (url === "/courses") {
      ejs
        .renderFile("./template/courses.ejs", { courses })
        .then((data) => res.end(data));
    } else {
      console.log("not-found");
      ejs
        .renderFile("./template/not-found.ejs", { name })
        .then((data) => res.end(data));
    }
  })
  .listen(8080);

// 사용 방법 참고 https://ejs.co/#install
//   let template = ejs.compile(str, options);
//   template(data);
//   // => Rendered HTML string

//   ejs.render(str, data, options);
//   // => Rendered HTML string

//   ejs.renderFile(filename, data, options, function(err, str){
//       // str => Rendered HTML string
//   });
