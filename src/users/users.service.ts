import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(public userRepository: UsersRepository) {}

    async getAll() {
        return this.userRepository.findAll()
    }

    async create(payload: any) {
        return this.userRepository.create(payload);
    }

    async getOne(id: string) {
        let data = await this.userRepository.find(id);

        if (data) {
            return data;
        } else {
            throw new HttpException('Users not found', HttpStatus.NOT_FOUND);
        }
    }

}
