import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/Product";

type ProductState = {
    products: IProduct[],
    favourites: IProduct[]
    errors:string|null,
    loading:boolean
};

const initialState: ProductState = {
    products: [ {
        id: 1,
        name: "iPhone 15 Pro Max",
        description: "iPhone 15 Pro ‑ первый iPhone, выполненный из титана аэрокосмического класса с использованием того же сплава, который используется космическими аппаратами для полетов на Марс.",
        price: 1400,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 1, name: "smartphone" }
      },
      {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        description: "Samsung Galaxy S23 Ultra оснащен невероятной камерой 200 МП и мощным процессором Snapdragon 8 Gen 2.",
        price: 1300,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 1, name: "smartphone" }
      },
      {
        id: 3,
        name: "MacBook Pro 16-inch",
        description: "MacBook Pro с чипом M2 Pro предлагает невероятную производительность и долгое время автономной работы для профессиональных пользователей.",
        price: 2500,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 2, name: "laptop" }
      },
      {
        id: 4,
        name: "Dell XPS 13",
        description: "Компактный и производительный ноутбук Dell XPS 13 с дисплеем InfinityEdge и процессором Intel 13-го поколения.",
        price: 1200,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 2, name: "laptop" }
      },
      {
        id: 5,
        name: "Apple Watch Series 9",
        description: "Apple Watch Series 9 с улучшенными функциями для здоровья, фитнеса и новым ультраярким дисплеем.",
        price: 500,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 3, name: "wearable" }
      },
      {
        id: 6,
        name: "Sony WH-1000XM5",
        description: "Наушники Sony WH-1000XM5 с активным шумоподавлением и улучшенной аудиокачеством.",
        price: 400,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 4, name: "headphones" }
      },
      {
        id: 7,
        name: "GoPro HERO11",
        description: "GoPro HERO11 предлагает 5.3K видео и стабилизацию HyperSmooth для захвата экшн-кадров.",
        price: 550,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 5, name: "camera" }
      },
      {
        id: 8,
        name: "Kindle Paperwhite",
        description: "Kindle Paperwhite с 6.8-дюймовым дисплеем и длительным временем автономной работы для чтения книг в любое время.",
        price: 150,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 6, name: "ereader" }
      },
      {
        id: 9,
        name: "Nikon Z6 II",
        description: "Полноформатная камера Nikon Z6 II с 24.5-мегапиксельным сенсором и быстрым автофокусом.",
        price: 1800,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 5, name: "camera" }
      },
      {
        id: 10,
        name: "Apple AirPods Pro (2nd Gen)",
        description: "Apple AirPods Pro с улучшенным шумоподавлением и адаптивным звуком.",
        price: 250,
        image: "https://www.istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
        isFav: false,
        category: { id: 4, name: "headphones" }
      }
    ],
    favourites:[],
    errors:null,
    loading:false
};


export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        toggleFav:(state:ProductState, action:PayloadAction<IProduct>)=>{
            state.products.forEach(p=>p.id===action.payload.id?p.isFav=!p.isFav:null)
            state.favourites.push(action.payload)
            localStorage.setItem("favo", JSON.stringify(state.favourites))
        }
    },
    extraReducers:(build)=>{
        // build.addCase()
    }
})

export const productsReducer = productSlice.reducer

export const {toggleFav} = productSlice.actions