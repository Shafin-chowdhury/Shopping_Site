//import { BiLogoMastercard } from "react-icons/bi"
import BlogCard from "./BlogCard"

const data= [
    {
        img:"Blog-1.jpg",
        title:"Healthy and Glowing skin",
        date:"22 September,2020",
        comment:8,

    },

    {
        img:"Blog-2.jpg",
        title:"Feel refresh",
        date:"12 Augest,2021",
        comment:6,

    },

    {
        img:"Blog-3.webp",
        title:"Enjoy your life",
        date:"18 November,2022",
        comment:1,

    },
]

const Blog = () => {
  return (
    <div className="container pt-16">
        <h2 className="font-bold text-2xl">Leatest News</h2>
        <p className="text-gray-500">
            Present post in a best way to highlight interesting moments of your blog.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((el) => (
                <BlogCard 
                key= {el.date}
                img= {el.img}
                title = {el.title}
                date = {el.date}
                comment = {el.comment}
                />
            ))}
        </div>
    </div>
  )
}

export default Blog
