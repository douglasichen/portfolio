// @ts-ignore
import { serveDir } from "jsr:@std/http@^1.0.0/file-server";

// @ts-ignore
Deno.serve((req: Request) => {
  return serveDir(req, {
    fsRoot: "dist",
    urlRoot: "",
  });
});
