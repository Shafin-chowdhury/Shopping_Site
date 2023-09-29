import ProductCard from "./ProductCard";
const data =[
    {id: 0, img:"Feature-2.jpg", name:"Eye-Lashes", price:"$300"},
    {id: 1, img:"Feature-3.jpg", name:"Eye-Shadow", price:"$600"},
    {id: 2, img:"Feature-4.jpg", name:"Excellent Finising", price:"$1200"},
    {id: 3, img:"Feature-5.jpeg", name:"Highlighter", price:"$200"},
];
const FeatureSection = () => {
  return (
    
      <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
         <div>
             <h3 className="font-medium text-2xl">Eye Makeup</h3>
             <p className="text-gray-600  mt-2">
                Buy best Qualityful make-up in reasonable price
             </p>
         </div>
         <div className="space-x-4 mt-8 lg:mt-0">
            <button className= "feature_btn">Eye-Makeup's</button>
            <button className= "text-gray-600 hover:text-accent">Facial Products</button>
            <button className= "text-gray-600 hover:text-accent">Acceceries</button>
         </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img className="w-full h-full object-cover"
                src="/Feature-1.jpg"
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

export default FeatureSection
