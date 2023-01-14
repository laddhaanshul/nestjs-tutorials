import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hello';
  }

  @Post()
  createMessages() {}

  @Get('/:id')
  getMessages() {}
}
