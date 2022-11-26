export default class resetPasswordRequestDto{
    constructor(
        private password : string,
        private resetToken : string
    ){}

    static createFromRequest(request : any){
        const {password, resetToken, ...etc} = request.body
        return new resetPasswordRequestDto(password, resetToken)
    }
}