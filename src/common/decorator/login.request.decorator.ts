import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import LoginRequestDto from "../dto/request/login.request.dto";


export const LoginRequestDecorator = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) : LoginRequestDto => {
        const request = ctx.switchToHttp().getRequest();
        const {email, password, ...etc} = request.body
        return new LoginRequestDto(email, password)
    }
)