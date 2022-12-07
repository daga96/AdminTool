import Router from "@koa/router";

const router = new Router();

router.get("/test", (ctx) => {
  ctx.body = "test";
});

export default router;
