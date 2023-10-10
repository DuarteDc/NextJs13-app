import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-slate-950">
      <section className="w-full px-20">
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
          <div className="col-span-2 w-full bg-red-700 rounded-md">
            x
          </div>
        </div>
      </section>
    </main>
  )
}
