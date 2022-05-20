class Category{
    id: number;
    name: string;

    constructor(name: string){
        this.id = Math.random();
        this.name = name;
    }
}

export default Category;