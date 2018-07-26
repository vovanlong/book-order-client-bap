export interface ILogin {
    email: string,
    password: string
}


export interface IRegister {
    name: string,
    email: string,
    password: string
}

export interface IBooks{
    message: string,
    is_success: string,
    data: IBook[]
}
export interface IBook {
    id: number,
    title: string,
    author: string,
    image: string,
    total_reviews: number
    review: IReview[]
}
export interface IReview {
    id: number,
    title: string,
    content_rating: number,
    recommend_rating: number,
    average_rating: number
}

export interface ICreateBook{
    id: number;
    name: string;
    title: string;
    content: string;
    author: string;
    price: number;
    quantity:number;
    image: string
}