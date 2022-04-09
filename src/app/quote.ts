export class Quote {
    id: number;
    quote: string;
    author: string;
    upvotes: number;
    downvotes: number;
    showDescription: boolean;
    addedBy:string;
    inputDate: Date;
    constructor(id: number, quote: string, author: string, upvotes: number, downvotes: number, showDescription: string, addedBy: string, inputDate: Date){
        this.id= id;
        this.quote= quote;
        this.author= author;
        this.upvotes= upvotes;
        this.downvotes= downvotes;
        this.showDescription= false;
        this.addedBy= addedBy;
        this.inputDate= inputDate
    }
}
