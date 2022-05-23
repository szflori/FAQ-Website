class User{
    id: number;
    username: string;
    email: string;
    password: string

    constructor(username: string, email: string, password: string){
        this.id = Math.random();
        this.username = username;
        this.email = email;
        this.password = password;
    }

}

export default User;