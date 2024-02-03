import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Main() {
    return (
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'><ChevronLeft /></button>
            <button className='rounded-full bg-black/40 p-1'><ChevronRight /></button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 pr-6 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/album.jpg" alt="album" />
              <strong>Demon Days</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 pr-6 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/album.jpg" alt="album" />
              <strong>Demon Days</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 pr-6 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/album.jpg" alt="album" />
              <strong>Demon Days</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 pr-6 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/album.jpg" alt="album" />
              <strong>Demon Days</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 pr-6 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/album.jpg" alt="album" />
              <strong>Demon Days</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 pr-6 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/album.jpg" alt="album" />
              <strong>Demon Days</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Clow Reed</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image className='w-full' width={120} height={120} src="/album.jpg" alt="album" />
              <strong className='font-semibold'>Demon Days</strong>
              <span className='text-sm text-zinc-400'>Gorillaz, Danger Mouse, Jason Cox, James Dring</span>
            </a>
            <a href='#' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image className='w-full' width={120} height={120} src="/album.jpg" alt="album" />
              <strong className='font-semibold'>Demon Days</strong>
              <span className='text-sm text-zinc-400'>Gorillaz, Danger Mouse, Jason Cox, James Dring</span>
            </a>
            <a href='#' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image className='w-full' width={120} height={120} src="/album.jpg" alt="album" />
              <strong className='font-semibold'>Demon Days</strong>
              <span className='text-sm text-zinc-400'>Gorillaz, Danger Mouse, Jason Cox, James Dring</span>
            </a>
            <a href='#' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image className='w-full' width={120} height={120} src="/album.jpg" alt="album" />
              <strong className='font-semibold'>Demon Days</strong>
              <span className='text-sm text-zinc-400'>Gorillaz, Danger Mouse, Jason Cox, James Dring</span>
            </a>
            <a href='#' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image className='w-full' width={120} height={120} src="/album.jpg" alt="album" />
              <strong className='font-semibold'>Demon Days</strong>
              <span className='text-sm text-zinc-400'>Gorillaz, Danger Mouse, Jason Cox, James Dring</span>
            </a>
          </div>
        </main>
    )
}