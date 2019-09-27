const http = require("http");
const chalk = require("chalk");
const config = require("./config/defaultConfig");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(`<htm><body>Hello cat66</body></htm>`);
  res.end();
});
server.listen(config.port, config.hostname, () => {
  const addr = `http://${config.hostname}:${config.port}`;
  console.info(`Server started at ${chalk.green(addr)}`);
});
