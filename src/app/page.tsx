import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Welcome to Timebox</h1>
      <Image
        src='/box-open-solid.svg'
        alt='Timebox logo'
        width={200}
        height={200}
      />
      <div className='flex flex-col items-center gap-y-1'>
        <p className='text-lg text-center'>Manage your time with Timebox</p>
        <a href='/app'>
          <Button className='w-min'>Get started</Button>
        </a>
      </div>
    </main>
  );
}
