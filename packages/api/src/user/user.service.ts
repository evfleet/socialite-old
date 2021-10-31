import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(body) {
    return 'This action adds a new user';
  }

  async findAll() {
    /*
    const client = await this.database.connect();
    const { rows } = await client.query('SELECT NOW()');

    await client.release();

    return { results: rows };
    */

    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, body) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
