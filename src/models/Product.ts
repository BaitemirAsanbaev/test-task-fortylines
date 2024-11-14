export interface IProduct{
    id:number
    name:string
    description:string
    image:string
    price:number
    category:ICategory
    isFav:boolean
}

export interface ICategory{
    id:number
    name:string
}

