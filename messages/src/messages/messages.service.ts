import { MessageRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessageRepository;

  constructor() {
    //Don't do this on real app
    // USE DEPENDENCY INJECTION
    this.messagesRepo = new MessageRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(message: string) {
    return this.messagesRepo.create(message);
  }
}
