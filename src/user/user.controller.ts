import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers() {
    return 'Users fetched';
  }

  @Post()
  createUser() {
    return 'User created';
  }

  @Put(':id')
  updateUser() {
    return 'User updated';
  }

  @Delete(':id')
  deleteUser() {
    return 'User deleted';
  }
}
