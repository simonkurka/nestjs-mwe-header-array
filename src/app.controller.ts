import { Controller, Get, Headers } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(
    @Headers('x-custom-header') customHeader: Array<string>
  ): string[] {
    return customHeader;
  }
}
