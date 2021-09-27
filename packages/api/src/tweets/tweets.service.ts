import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetsService {
  create(body) {
    return 'This action adds a new tweet';
  }

  findAll() {
    return `This action returns all tweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, body) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
