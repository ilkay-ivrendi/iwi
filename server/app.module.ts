import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { HelloController } from './src/hello/hello.controller';
import { AuthModule } from './src/auth/auth.module';
import { UsersModule } from './src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { PhotoModule } from './src/photo/photo.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule,
    PhotoModule,
  ],
  controllers: [HelloController],
  providers: []
})
export class ApplicationModule {}
