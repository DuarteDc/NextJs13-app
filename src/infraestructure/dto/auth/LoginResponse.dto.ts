import { UserDto } from '../User.dto';

export interface LoginResponseDto {
    user    : UserDto;
    token   : string;
}