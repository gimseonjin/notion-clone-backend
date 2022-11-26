export default class LoginRequestDto{
    constructor(
        private email : string,
        private password : string
    ){}

    static createFromRequest(request : any){
        const {email, password, ...etc} = request.body
        return new LoginRequestDto(email, password)
    }
}