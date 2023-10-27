import { ProductOptions } from "@/infraestructure/components/product/ProductOptions";
import Image from "next/image";
import Link from "next/link";

export default async function Product() {

    const arra = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <main className="min-h-screen mt-40">
            <section className="container mx-auto">
                <ProductOptions />
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <Image
                            src="/image.png"
                            width={1000}
                            height={1000}
                            alt="Product-name"
                        />
                    </div>
                    <div className="px-4 lg:px-10 lg:border-l-2 border-gray-600/50">
                        <h1 className="text-3xl lg:text-7xl font-bold my-10">Lorem ipsum dolor sit amet</h1>
                        <div className=" flex flex-col justify-center">
                            <p className="text-base lg:text-xl text-gray-400 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ex iusto dignissimos nobis. Voluptates, nesciunt aliquam deserunt quibusdam nam exercitationem adipisci</p>
                            <span className="text-xl lg:text-2xl text-rose-600 my-2 font-bold">$5000</span>
                            {/* <div className="mt-5">
                            <button className="border-rose-600/40 border-[2.5px] px-10 py-3 rounded-md cursor-pointer bg-rose-600/80 transition-all ease-in duration-200 font-bold">
                            Agregar
                            </button>
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col items-center xl:px-60 max-w-[2500px] mx-auto min-h-screen">
                <h2 className="text-center text-4xl lg:text-4xl font-semibold text-white-600 my-20 uppercase">Productos Relacionados</h2>
                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-4 lg:gap-5 xl:gap-10 mx-auto">
                    {
                        arra.map((_, index) => (
                            <Link href={`/product/${index}`}>
                                <div className="bg-slate-800/40 w-full rounded-xl p-2 lg:p-10 hover:border-slate-800 border-[3px] border-slate-800/30 transition-all ease-in duration-200 cursor-pointer relative" key={index}>
                                    {index % 2 === 0 && <span className="absolute right-5 top-5 lg:text-2xl text-sm rounded-full text-white font-bold">-5%</span>}
                                    <Image
                                        src="/image.png"
                                        width={400}
                                        height={400}
                                        alt="product-name"
                                    />
                                    <p className="lg:text-xl text-xs truncate text-gray-400">Lorem ipsum dolor sit amet.</p>
                                    <span className="flex items-center">
                                        {index % 2 === 0 && <p className="text-rose-500 font-bold pr-2 lg:pr-5 lg:text-2xl text-base">$1,800</p>}
                                        <p className={`font-bold my-4 ${index % 2 === 0 ? 'text-rose-600/60 text-xs' : 'text-rose-600 lg:text-2xl'}`}>$2,000</p>
                                    </span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}