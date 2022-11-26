import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import LoginRequestDto from "../dto/request/login.request.dto";


export const UserIdDecorator = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) : LoginRequestDto => {
        const request = ctx.switchToHttp().getRequest();
        return request.user
    }
)