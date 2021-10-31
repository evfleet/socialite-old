import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class UserRepository {
  constructor(@Inject('DATABASE') database: Pool) {}

  async findAll() {
    return '123';
  }
}
