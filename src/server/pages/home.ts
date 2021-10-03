import { Request } from "@hapi/hapi";

export function home(request: Request): string {
  console.log("Processing request", request.info.id);
  return "Hello world";
}
