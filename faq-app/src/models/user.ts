class User{
    id: number;
    name: string;
    email: string;
    gender: string;

    constructor(name: string, email: string, gender: string){
        this.id = Math.random();
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

}

export default User;