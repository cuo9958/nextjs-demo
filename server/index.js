const express = require("express");
const next = require("next");
require("./task");
require("./message");

const server = express();
const port = parseInt(process.env.PORT, 10) || 8082;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// 设置head标头
server.set("x-powered-by", dev);
// 初始化Nextjs
app
  .prepare()
  .then(() => {
    //自定义api
    server.get("/api_test", (req, res) => {
      res.json({ code: 1, data: "ok" });
    });
    // 自定义渲染内容
    server.get("/t/:id", (req, res) => {
      return handle(req, res);
    });
    // 拦截所有内容
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    try {
      server.listen(port, "0.0.0.0", () => {
        console.log(`> Ready on http://localhost:${port}`);
      });
    } catch (error) {
      console.error(error);
    }
  })
  .catch((err) => console.log(err));
