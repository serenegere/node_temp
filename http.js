const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/"){
  res.write("Welcome to our homepage");
  res.end();
}
if (req.url === "/about") {
  res.write(`<h1>About</h1>
    This is our struggle.`);
    res.end();
}
else{
  res.end("oops");
}
})
server.listen(5000);