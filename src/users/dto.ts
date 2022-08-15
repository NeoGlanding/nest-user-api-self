import { IsString, IsInt, IsNotEmpty, IsEmail } from "class-validator";

export class UserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsInt()
    age: number;

}