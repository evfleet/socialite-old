import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, TweetsModule, DatabaseModule],
})
export class AppModule {}
