// //create a type 


// export type ProductType = {
//     image: string,
//     title: string,
//     desc: string,
//     price: number
// }

// export const ProductList: ProductType[] = [
//     {
//         image: "https://i.pinimg.com/736x/99/5e/c6/995ec6817fecd20e62803f8cbdd1bff7.jpg",
//         title: "Headphones",
//         desc: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 199.99
//     },
//     {
//         image: "https://i.pinimg.com/736x/45/1f/ba/451fba1d2cc25f6599d2f68619ad751b.jpg",
//         title: "BMW M4",
//         desc: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 2000
//     },
//     {
//         image: "https://i.pinimg.com/1200x/ea/20/db/ea20dbfe74d83b52691a63bbe6eb45e3.jpg",
//         title: "Ferrari SF90",
//         desc: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 4000
//     },
//     {
//         image: "https://i.pinimg.com/1200x/41/4b/d3/414bd3610759b29084aa90e30cbad15f.jpg",
//         title: "NISSAN GT-R NISMO 2020",
//         desc: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 5000
//     },
//     {
//         image: "https://i.pinimg.com/736x/7f/ce/7f/7fce7fc416a470d8a92a87ddfe536408.jpg",
//         title: "Audi R8",
//         desc: "Experience music like never before with our state-of-the-art Cosmic Headphones. Immerse yourself in crystal-clear sound and unparalleled comfort.",
//         price: 4500
//     },

// ]
export interface Item {
  title: string;
  price: string;
  desc: string;
  image: string;
}

export const ProductList: Item[] = [
  {
    title: "Bacon Onion Pizza Focaccia",
    price: "ចាប់ពី $ 3.44",
    desc: "ភីហ្សាសម្រាប់មនុស្ស 1 នាក់",
    image: "https://i.pinimg.com/736x/72/44/45/72444516e4be3f1f4ef92e3b8fbe68b7.jpg",
  },
    {
    title: "Tuna Melt Sandwich",
    price: "ចាប់ពី $3.92 ",
    desc: "Mix of tuna cream cheese onions.We Recommend adding: Jalapeno ...",
  
    image: "https://i.pinimg.com/736x/a3/46/fa/a346fa3a560deada9b6eec722de05842.jpg",
  },
    {
   
    title: "Cream Cheese Basil Tomatoes",
    price: "ចាប់ពី $ 3.68",
    desc: "Try Coppa as extra addon or any meat of your cho",
    image: "https://i.pinimg.com/736x/b8/75/28/b87528b1f97af9e67f99539d0aa8b71d.jpg",
  },
    {
   
    title: " Smoked Chicken Mix",
    price: "ចាប់ពី $ 3.76 $-4.70",
    desc: "Chicken deli mixed with grainy mustard mayo and onions ....",
    image: "https://i.pinimg.com/1200x/33/f8/f9/33f8f955b818f768e7a463f53a1cbea6.jpg",
  },
  
];