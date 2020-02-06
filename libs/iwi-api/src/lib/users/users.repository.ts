import { Connection, Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (userDto: UserDto) => {
    return await this.save(userDto);
  };
}
