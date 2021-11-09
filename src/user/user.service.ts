import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(userDto: UserDto) : UserDto{
    this.users.push(userDto);
//     return "have created a new user #${user.name}";
    return userDto;
  }

  findAll(): User[] {
    return this.users;
  }

}
