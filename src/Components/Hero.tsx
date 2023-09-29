import {BsArrowRight} from 'react-icons/bs';
const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl: grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
            <img className="w-full h-full object-cover rounded-lg"
            src="/Hero-1.webp"
            alt="hero image"
            />

            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%]  -translate-y-[50%] sm:space-y-4">
                <p className="text-2xl hidden sm:block">100% Original Products</p>
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">High Quality Skin Products</h2>
                <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
                <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-4">$18.36</div>
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px]
                sm:px-6 sm:py-3 flex cursor-pointer">Shop Now <BsArrowRight/>
                </div>
            </div>
        </div>

        <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg'
            src='/Hero-1.png'
            alt='hero image'
            />
            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[30%]  -translate-y-[30%] sm:space-y-2">
            
            <p className="text-2xl hidden sm:block">High Products</p>
                
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px]
                sm:px-6 sm:py-3 flex cursor-pointer">Shop Now <BsArrowRight/>
                </div>
            </div>
        </div>

        <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg'
            src='/Hero-3.png'
            alt='hero image'
            />
            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[30%]  -translate-y-[50%] sm:space-y-2">
            <h2 className='text-2xl sm:text-3xl font-bold'>Organic ingredients</h2>
            <p className="text-2xl hidden sm:block">High Products</p>
                
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px]
                sm:px-6 sm:py-3 flex cursor-pointer">Shop Now <BsArrowRight/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
