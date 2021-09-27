import { Module } from '@nestjs/common';
import { Pool } from 'pg';

const DatabaseProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    host: 'database',
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  }),
};

@Module({
  providers: [DatabaseProvider],
  exports: [DatabaseProvider],
})
export class DatabaseModule {}
