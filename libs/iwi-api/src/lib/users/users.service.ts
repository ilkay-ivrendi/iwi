import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export const users: User[] = [
  {
    userName: 'Admin',
    firstName: 'Super',
    lastName: 'Admin',
    password: '1234'
  },
  { userName: 'User', firstName: 'Normal', lastName: 'User', password: '1234' }
];

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
