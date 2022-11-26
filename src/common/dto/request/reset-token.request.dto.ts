export default class ResetTokenRequestDto{
    constructor(
        private email : string
    ){}

    static createFromRequest(request : any){
        const {email, ...etc} = request.body
        return new ResetTokenRequestDto(email)
    }
}