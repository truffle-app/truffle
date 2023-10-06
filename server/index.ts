const server = Bun.serve({
    port: 3001,
    fetch(req) {
      return new Response("Bun!");
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);