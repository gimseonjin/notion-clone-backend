import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import SignupRequestDto from "../dto/request/signup.request.dto";


export const SignupRequestDecorator = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) : SignupRequestDto => {
        const request = ctx.switchToHttp().getRequest();
        const {email, password, name, ...etc} = request.body
        return new SignupRequestDto(email, password, name)
    }
)