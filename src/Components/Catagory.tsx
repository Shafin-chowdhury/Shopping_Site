import CatagoryCard from "./CatagoryCard"


const data =
[
    {
    id:0,
    name:"Eye-liner",
    count:"9 Products",
    img: "/Catagory-1.webp",
},

{
    id:1,
    name:"Lipstic",
    count:"50 Products",
    img: "/Catagory-2.webp",
},

{
    id:2,
    name:"Foundation",
    count:"18 Products",
    img: "/Catagory-3.webp",
},

{
    id:3,
    name:"Eye-Shadow",
    count:"9 Products",
    img: "/Catagory-4.webp",
},

{
    id:4,
    name:"Nail polish",
    count:"36 Products",
    img: "/Catagory-5.jpg",
},

{
    id:5,
    name:"Conceler",
    count:"23 Products",
    img: "/Catagory-6.jpg",
},

{
    id:6,
    name:"Blush",
    count:"24 Products",
    img: "/Catagory-7.jpg",
},

{
    id:7,
    name:"Mashkara",
    count:"19 Products",
    img: "/Catagory-8.jpg",
},

{
    id:8,
    name:"Acceceries",
    count:"53 Products",
    img: "/Catagory-9.jpeg",
},






]
const Catagory = () => {
  return (
   
      <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid:cols-4 gap-4">
        {data.map((el) => (
            <CatagoryCard
            key={el.id}
            img ={el.img}
            name={el.name}
            count={el.count}
            />
       ) )}
        </div>
      </div>
    
  )
}

export default Catagory
