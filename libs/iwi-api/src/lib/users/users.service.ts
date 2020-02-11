import { Injectable, Inject } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {
    const user = new User();
    user.id = 1;
    user.age = 24;
    user.firstName = 'ilkay';
    user.lastName = 'ivrendi';
    user.userName = 'ilkayivrendi';
    user.password = 'admin';
    const user2 = new User();
    user2.id = 2;
    user2.age = 24;
    user2.firstName = 'normal';
    user2.lastName = 'user';
    user2.userName = 'normaluser';
    user2.password = 'password';
    this.usersRepository.save(user);
    this.usersRepository.save(user2);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
