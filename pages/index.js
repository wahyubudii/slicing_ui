import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <div className='container mx-auto'>
          <div className='flex bg-blue-600'>
            <div className='w-3/12 uppercase text-2xl font-semibold tracking-widest'>Hallo</div>
            <div className='w-4/12  '>
              <ul className='flex justify-center space-x-10'>
                <li><a className='text-white text-lg text-opacity-60 font-semibold' href=''>Profile</a></li>
                <li><a className='text-white text-lg text-opacity-60 font-semibold' href=''>Profile</a></li>
                <li><a className='text-white text-lg text-opacity-60 font-semibold' hre0f=''>Profile</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
