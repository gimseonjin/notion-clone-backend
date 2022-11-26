export default class ActivateAccountRequestDto{
    constructor(
        private activationToken : string
    ){}

    static createFromRequest(request : any){
        const {activationToken, ...etc} = request.body
        return new ActivateAccountRequestDto(activationToken)
    }
}