export default class SignupRequestDto{
    constructor(
        private email : string,
        private password : string,
        private name : string
    ){}
}