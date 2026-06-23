import { TodoList } from "./src/core";

const todo = new TodoList();

Bun.serve({
  port: 3000,

  async fetch(req) {
    const url = new URL(req.url);

    // arquivos estaticos
    const filePath = `./public${url.pathname}`;

    if (url.pathname === "/") {
      return new Response(Bun.file("./public/index.html"));
    }

    const file = Bun.file(filePath);
    if (await file.exists()) {
      return new Response(file);
    }

    // api get
    if (url.pathname === "/items" && req.method === "GET") {
      return Response.json(todo.getItems());
    }

    // api post
    if (url.pathname === "/items" && req.method === "POST") {
      const body = await req.json() as { title?: string };

      if (!body.title) {
        return new Response("title obrigatório", { status: 400 });
      }

      const item = todo.addItem(body.title);
      return Response.json(item);
    }

    // rota com id
    const match = url.pathname.match(/^\/items\/(\d+)$/);

    // delete
    if (match && req.method === "DELETE") {
      const id = Number(match[1]);
      const ok = todo.deleteItem(id);
      return Response.json({ success: ok });
    }

    // put
    if (match && req.method === "PUT") {
      const id = Number(match[1]);

      const body = await req.json() as { title?: string };

      if (!body.title) {
        return new Response("title obrigatório", { status: 400 });
      }

      const ok = todo.updateItem(id, body.title);
      return Response.json({ success: ok });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log("Servidor rodando em http://localhost:3000");