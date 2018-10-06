import { LoginDto } from "./LoginDto";

export class ResponseDto{

    success : string;
    error : string;
    loginDto : LoginDto = new LoginDto();
    status : string;
}