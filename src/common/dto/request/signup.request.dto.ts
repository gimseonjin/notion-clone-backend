export default class SignupRequestDto{
    constructor(
        private email : string,
        private password : string,
        private name : string
    ){}

    static createFromRequest(request : any){
        const {email, password, name, ...etc} = request.body
        return new SignupRequestDto(email, password, name)
    }
}