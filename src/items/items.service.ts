import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123543453245',
      name: 'Item One',
      qty: 100,
      description: 'This it item one',
    },
    {
      id: '345345342',
      name: 'Item Two',
      qty: 50,
      description: 'This it item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
