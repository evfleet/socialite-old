import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

import { modules } from '../config/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(modules.DATABASE) private database: Pool) {}

  create(createUserDto: CreateUserDto) {
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
