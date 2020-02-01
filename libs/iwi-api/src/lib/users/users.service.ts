import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

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
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: Repository<User>
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.userName === username);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  /**
   * Seed all users.
   *
   * @function
   */
  create(): Array<Promise<User>> {
    return users.map(async (User: User) => {
      return await this.usersRepository
        .findOne({ userName: User.userName })
        .then(async dbUser => {
          if (dbUser) {
            return Promise.resolve(null);
          }
          return Promise.resolve(await this.usersRepository.create(users));
        })
        .catch(error => Promise.reject(error));
    });
  }
}
