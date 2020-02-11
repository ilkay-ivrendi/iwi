import { Injectable, Inject } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { Users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly usersRepository: typeof Users
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.findAll();
  }
}
