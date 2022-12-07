"use strict";

import Koa from "koa";
import { koaBody } from "koa-body";
import cors from "@koa/cors";
import router from "./routes/router.js";

const app = new Koa();
app.use(koaBody({ jsonLimit: "100mb" }));
app.use(cors());
app.use(router.routes());
app.listen(8999, () => {
  console.log("listening on port", 8999);
});
