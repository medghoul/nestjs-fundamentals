import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuidv4 } from 'uuid';

@Controller('users')
export class UsersController {
  users: UserEntity[] = [];

  @Get()
  findAll() {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.users.find((user) => user.id === id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      id: uuidv4(),
    };
    this.users.push(user);
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { ...user, ...updateUserDto };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    this.users = this.users.filter((user) => user.id !== id);
    return { message: 'User deleted' };
  }
}
