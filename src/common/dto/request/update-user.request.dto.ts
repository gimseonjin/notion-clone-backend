export default class UpdateUserRequestDto{
    constructor(
        private email : string,
        private password : string,
        private name : string
    ){}
}