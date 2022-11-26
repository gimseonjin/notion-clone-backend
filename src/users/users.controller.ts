import { Controller, Get, Post, Put } from '@nestjs/common';
import { RequestDtoDecorator } from 'src/common/decorator/request-dto.decorator';
import ActivateAccountRequestDto from 'src/common/dto/request/activate-account.request.dto';
import LoginRequestDto from 'src/common/dto/request/login.request.dto';
import resetPasswordRequestDto from 'src/common/dto/request/reset-password.dto';
import ResetTokenRequestDto from 'src/common/dto/request/reset-token.request.dto';
import SignupRequestDto from 'src/common/dto/request/signup.request.dto';
import UpdateUserRequestDto from 'src/common/dto/request/update-user.request.dto';

@Controller('users')
export class UsersController {

    constructor(){}

    @Post("/signup")
    signup (
        @RequestDtoDecorator(SignupRequestDto) signupRequestDto
    ) : string {
        return signupRequestDto
    }

    @Post("/login")
    login (
        @RequestDtoDecorator(LoginRequestDto) loginREquestDto
    ) : string {
        return loginREquestDto
    }

    @Post("/logout")
    logout (
    ) : string {
        return "boid"
    }

    @Get("/account")
    getUser (
    ) : string {
        return "boid"
    }


    @Put("/account")
    updateUser (
        @RequestDtoDecorator(UpdateUserRequestDto) updateUserRequestDto
    ) : string {
        return updateUserRequestDto
    }


    @Post("/resetToken")
    getResetToken (
        @RequestDtoDecorator(ResetTokenRequestDto) resetTokenRequestDto
    ) : string {
        return resetTokenRequestDto
    }

    @Post("/resetPassword")
    resetPassword (
        @RequestDtoDecorator(resetPasswordRequestDto) resetPasswordRequestDto
    ) : string {
        return resetPasswordRequestDto
    }

    @Post("/activate")
    activatedUser (
        @RequestDtoDecorator(ActivateAccountRequestDto) activateAccountREquestDto
    ) : string {
        return activateAccountREquestDto
    }
}

