import { Elysia } from "elysia";
import { db } from "./database/postgres.db";
import { sql } from "drizzle-orm";

const app = new Elysia()

app.get("/", () => "Hello Elysia")

app.get("/users", async () => {
  console.log("fetching users from db")
  const obg = await db.execute(sql`SELECT * FROM playing_with_neon;`)
  console.log(obg)
  return JSON.stringify(obg)
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
