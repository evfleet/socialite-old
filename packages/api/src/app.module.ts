import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TweetsModule } from './tweets/tweets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, TweetsModule, DatabaseModule],
})
export class AppModule {}
