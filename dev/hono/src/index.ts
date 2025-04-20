import { Hono } from "hono";
import { betterSource } from "better-source";

const app = new Hono();

app.get("/", (c) => {
	const { key } = betterSource({ key: "123" });
	return c.text(`Hello Hono! ${key}`);
});

export default app;
