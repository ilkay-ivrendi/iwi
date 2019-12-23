import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { Repository } from "typeorm";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<User>
  ) {
    this.users = [
      {
        userId: 1,
        username: "john",
        password: "changeme"
      },
      {
        userId: 2,
        username: "chris",
        password: "secret"
      },
      {
        userId: 3,
        username: "maria",
        password: "guess"
      }
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
