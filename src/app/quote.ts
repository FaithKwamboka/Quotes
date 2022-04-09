export class Quote {
    id: number;
    quote: string;
    author: string;
    upvotes: number;
    downvotes: number;
    showDescription: boolean;
    addedBy:string;
    constructor(id: number, quote: string, author: string, upvotes: number, downvotes: number, description: string, addedBy: string){
        this.id= id;
        this.quote= quote;
        this.author= author;
        this.upvotes= upvotes;
        this.downvotes= downvotes;
        this.showDescription= false;
        this.addedBy= addedBy
    }
}
