import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class UsersRepository {
    async findAll() {
        let data = await readFile('db.json', 'utf8');
        data = JSON.parse(data);

        return data;
    }

    async find(id: string) {
        let data = await readFile('db.json', 'utf8');
        data = JSON.parse(data);

        return data[id];
    }

    async create(payload: any) {
        let data = await readFile('db.json', 'utf8');
        let edited = JSON.parse(data);

        let id = Math.floor(Math.random() * 999);

        edited[id] = payload;

        await writeFile('db.json', JSON.stringify(edited));
    }
}