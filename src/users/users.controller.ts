import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'Users fetched';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `User fetched ${id}`;
  }

  @Post()
  create() {
    return 'User created';
  }

  @Patch(':id')
  update() {
    return 'User updated';
  }
  @Delete(':id')
  delete() {
    return 'User deleted';
  }
}
