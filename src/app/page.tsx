import { DoneIcon } from '@/infraestructure/components/ui/icons'
import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  const arra = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <main className="min-h-screen bg-slate-950">
      <header className="flex items-center min-h-[600px] px-40  max-w-[2500px] mx-auto">
        <span className="w-1/2 [&>h2]:my-20">
          <h1 className="text-9xl font-bold mt-40">Lorem ipsum <p className="text-blue-600">dolor sit</p></h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, officiis?</h2>
        </span>
      </header>
      <section className="w-full xl:px-60 pt-[300px] max-w-[2500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 [&>div]:border-[3px] [&>div]:border-slate-800 hover:[&>div]:transition-all hover:[&>div]:ease-linear hover:[&>div]:duration-200 hover:[&>div]:border-blue-800/80 [&>div]:cursor-pointer">
          <div className="bg-slate-800/40 w-full rounded-xl h-[300px] relative p-10 text-blue-600">
            <DoneIcon height={40} width={40} />
            <span className="text-white">
              <h3 className="text-2xl font-bold my-5">Devices</h3>
              <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis!</p>
            </span>
          </div>

          <div className="bg-slate-800/40 w-full rounded-xl h-[300px] relative p-10 text-blue-600">
            <DoneIcon height={40} width={40} />
            <span className="text-white">
              <h3 className="text-2xl font-bold my-5">Devices</h3>
              <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis!</p>
            </span>
          </div>
          <div className="bg-slate-800/40 w-full rounded-xl h-[300px] relative p-10 text-blue-600">
            <DoneIcon height={40} width={40} />
            <span className="text-white">
              <h3 className="text-2xl font-bold my-5">Devices</h3>
              <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis!</p>
            </span>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center xl:px-60 max-w-[2500px] mx-auto min-h-screen">
        <h2 className="text-center text-4xl lg:text-8xl font-semibold text-white-600 my-20 uppercase">Productos</h2>
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-10 mx-auto">
          {
            arra.map((_, index) => (
              <div className="bg-slate-800/40 w-full rounded-xl p-2 lg:p-10 hover:border-slate-800 border-[3px] border-slate-800/30 transition-all ease-in duration-200 cursor-pointer relative" key={index}>
                <Link href={`/product/${index}`}>
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
                </Link>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}
