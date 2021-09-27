import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { modules } from '../config/constants';

@Injectable()
export class UsersService {
  constructor(@Inject(modules.DATABASE) private database: Pool) {}

  create(body) {
    return 'This action adds a new user';
  }

  async findAll() {
    const client = await this.database.connect();
    const { rows } = await client.query('SELECT NOW()');

    await client.release();

    return { results: rows };
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
