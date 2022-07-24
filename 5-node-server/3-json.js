const http = require("http");

const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
  { name: "Front-end" },
];

const server = http
  .createServer((req, res) => {
    const url = req.url; // what? (클라이언트가 어떤 데이터를 원하는지)
    const method = req.method; // how?, action? (그것으로 어떤것을 하고 싶은지?)
    if (url === "/courses") {
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(courses));
      } else if (method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          console.log("chunk", chunk);
          body.push(chunk);
        });
        req.on("end", () => {
          const bodyStr = Buffer.concat(body).toString();
          const course = JSON.parse(bodyStr);
          courses.push(course);
          console.log("courses", courses);
        });
        res.writeHead(201);
        res.end();
      }
    }
  })
  .listen(8080);
