import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDTO } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(public userService: UsersService) {}

    @Get()
    async getAll() {
        return this.userService.getAll()
    }

    @Get('/:id')
    async getOne(@Param('id') id: string) {
        return this.userService.getOne(id)
    }

    @Post()
    async create(@Body() body: UserDTO) {
        return this.userService.create(body);
    }
}
