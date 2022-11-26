import { Controller, Get, Post, Put } from '@nestjs/common';
import { LoginRequestDecorator } from 'src/common/decorator/login.request.decorator';
import { SignupRequestDecorator } from 'src/common/decorator/signup.request.decorator';
import { UserDecorator } from 'src/common/decorator/user.decorator';
import LoginRequestDto from 'src/common/dto/request/login.request.dto';
import SignupRequestDto from 'src/common/dto/request/signup.request.dto';

@Controller('users')
export class UsersController {

    constructor(){}

    @Post("/signup")
    signup (
        @SignupRequestDecorator() signupRequestDto : SignupRequestDto
    ) : string {
        return "boid"
    }

    @Post("/login")
    login (
        @LoginRequestDecorator() loginRequestDto : LoginRequestDto
    ) : string {
        return "boid"
    }

    @Post("/logout")
    logout (
        @UserDecorator() user
    ) : string {
        return "boid"
    }

    @Get("/account")
    getUser (
        @UserDecorator() user
    ) : string {
        return "boid"
    }


    @Put("/account")
    updateUser (
        @UserDecorator() user
    ) : string {
        return "boid"
    }


    @Post("/resetToken")
    getResetToken () : string {
        return "boid"
    }

    @Post("/resetPassword")
    resetPassword () : string {
        return "boid"
    }

    @Post("/activate")
    activatedUser () : string {
        return "boid"
    }
}

