export default class UpdateUserRequestDto{
    constructor(
        private email : string,
        private password : string,
        private name : string
    ){}

    static createFromRequest(request : any){
        const {email, password, name, ...etc} = request.body
        return new UpdateUserRequestDto(email, password, name)
    }
}