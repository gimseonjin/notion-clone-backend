import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [UsersModule, PagesModule],
  controllers: [AppController]
})
export class AppModule {}
