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
} from '@nestjs/common';

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
  create(@Body() body: { userName: string; password: string; phone: string }) {
    return `User created ${body.userName}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `User updated ${id}`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return `User deleted ${id}`;
  }
}
