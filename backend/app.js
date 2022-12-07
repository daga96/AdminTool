"use strict";

const Koa = require("koa");
const { koaBody } = require("koa-body");

function start(workerId) {
  const app = new Koa();
  app.use(koaBody({ jsonLimit: "100mb" }));

  app.on("error", (err, ctx) => {
    global.logger.error("[RES]", ctx.method, ctx.path, ctx.response.body, err);
  });

  app.listen(8999, () => {
    global.logger.info("listening on port", 8999);
  });
}
