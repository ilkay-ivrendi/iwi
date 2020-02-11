import {
  Connection,
  Repository,
  EntityRepository,
  createConnection
} from 'typeorm';
import { Users } from './user.entity';
import { UserDto } from './user.dto';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  createUser = async (userDto: UserDto) => {
    return await this.save(userDto);
  };
}