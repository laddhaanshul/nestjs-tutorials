import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {
  async openFile(fileName: string) {
    const contents = await readFile(fileName, 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async findOne(id: string) {
    const messages = await this.openFile('messages.json');
    return messages[id];
  }

  async findAll() {
    const messages = await this.openFile('messages.json');
    return messages;
  }

  async create(content: string) {
    const messages = await this.openFile('messages.json');
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
