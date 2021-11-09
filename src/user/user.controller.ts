import { Controller,Get, Post, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
constructor(private userService: UserService){}
 @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/saveUser')
  async saveUser(@Body() userDto: UserDto): Promise<UserDto>{
    return this.userService.create(userDto);
  }

}
