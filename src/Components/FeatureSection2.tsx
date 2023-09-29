import ProductCard from "./ProductCard";
const data =[
    {id: 0, img:"Feature-7.webp", name:"Handcream", price:"$300"},
    {id: 1, img:"Feature-8.jpg", name:"Serum", price:"$600"},
    {id: 2, img:"Feature-9.webp", name:"Sunscreen", price:"$1200"},
    {id: 3, img:"Feature-10.webp", name:"Facewash", price:"$200"},
];
const FeatureSection2 = () => {
  return (
    
      <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
         <div>
             <h3 className="font-medium text-2xl">Skin Care</h3>
             <p className="text-gray-600  mt-2">
                Best Quality Skin Products are here
             </p>
         </div>
         <div className="space-x-4 mt-8 lg:mt-0">
            <button className= "feature_btn">Skin Care</button>
            <button className= "text-gray-600 hover:text-accent">Eye-Makeup</button>
            <button className= "text-gray-600 hover:text-accent">Acceceries</button>
         </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img className="w-full h-full object-cover"
                src="/Feature-6.jpg"
                alt="banner"
                />
            </div>

            {data.map((el) =>(
                <ProductCard
                key = {el.id}
                img = {el.img}
                name = {el.name}
                price = {el.price}
                />
            ))}
        </div>
      </div>
    
  )
}

export default FeatureSection2

