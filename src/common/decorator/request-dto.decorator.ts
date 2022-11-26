import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const RequestDtoDecorator = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return (data as any).createFromRequest(request)
    }
)