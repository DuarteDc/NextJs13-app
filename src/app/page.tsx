import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="w-full px-60 pt-[300px] max-w-[2500px] mx-auto">
        <div className="grid grid-cols-4 gap-10">
          <div className="bg-yellow-500 w-full rounded-md flex items-center justify-end h-[300px] relative shadow-[10px_10px_88px_5px_rgba(255,255,255,0.2)]">
            <h3 className="text-8xl font-bold absolute text-white left-8 top-1/3 z-10">Devices</h3>
            <Image
              src="/image.png"
              alt="images"
              width="300"
              height="40"
              className="rotate-12 drop-shadow-2xl "
            />
            <button className="absolute bottom-10 bg-white rounded-full px-10 py-3 left-10 font-semibold cursor-pointer">
              Mas
            </button>
          </div>
          <div className="bg-zinc-700 w-full rounded-md flex items-center justify-end h-[300px] relative shadow-[10px_10px_88px_5px_rgba(255,255,255,0.2)]">
            <h3 className="text-8xl font-bold absolute text-white left-8 top-1/3 z-10">Devices</h3>
            <Image
              src="/image.png"
              alt="images"
              width="300"
              height="40"
              className="rotate-12 drop-shadow-2xl "
            />
            <button className="absolute bottom-10 bg-white rounded-full px-10 py-3 left-10 font-semibold cursor-pointer">
              Mas
            </button>
          </div>
          <div className="bg-red-600 col-span-2 w-full rounded-md flex items-center justify-end h-[300px] relative shadow-[10px_10px_88px_5px_rgba(255,255,255,0.2)]">
            <h3 className="text-8xl font-bold absolute text-white left-8 top-1/3 z-10">Devices</h3>
            <Image
              src="/image.png"
              alt="images"
              width="300"
              height="40"
              className="rotate-12 drop-shadow-2xl "
            />
            <button className="absolute bottom-10 bg-white rounded-full px-10 py-3 left-10 font-semibold cursor-pointer">
              Mas
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-blue-800 my-40 container mx-auto grid grid-cols-2 text-white px-20 py-36 font-bold rounded-md max-w-[2500px]">
        <div>
          <span className="text-lg">Lorem ipsum dolor sit.</span>
          <h3 className="text-8xl my-5">Lorem, ipsum dolor.</h3>
          <span className="text-lg">Lorem ipsum.</span>
        </div>
        <div className="[&>span]:text-base">
          <span>Lorem ipsum dolor sit.</span>
          <h4 className="text-5xl">Lorem, ipsum dolor.</h4>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati?</span>
          <button className="block mt-20 bg-white rounded-full px-10 py-4 text-black">
            Shop
          </button>
        </div>
      </section>
    </main>
  )
}
