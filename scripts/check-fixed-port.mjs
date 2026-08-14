import { createServer } from "node:net";

const port = 3000;

await new Promise((resolve, reject) => {
  const server = createServer();

  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" || error.code === "EACCES") {
      console.error(
        `Port ${port} is unavailable. Stop the process using it before restarting; refusing to hop ports.`,
      );
      process.exit(1);
      return;
    }

    reject(error);
  });

  server.once("listening", () => {
    server.close(resolve);
  });

  server.listen(port, "0.0.0.0");
});
