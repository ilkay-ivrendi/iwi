import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return 'we get all dogs';
    }

    @Post()
    create(@Body() userDto: UserDto) {
        return userDto;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `we get the user with the id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the user with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the user with the id ${id}`;
    }
}
