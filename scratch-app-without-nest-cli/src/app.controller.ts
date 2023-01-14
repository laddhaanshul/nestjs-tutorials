import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/hello")
  getRootRoute() {
    return "hi there";
  }

  @Get("/bye")
  getByeThere() {
    return "bye";
  }
}
