import { UserDto } from '../User.dto';

export type LoginResponseDto = {
    user    : UserDto;
    token   : string;
}