import Logo from '../assets/logo.svg'
import { Dropdown } from './Dropdown'

export function Navbar() {
    return (

        <div className="w-screen h-24 bg-zinc-900 border-b-2 border-gray-800 flex fixed">

            <div className='h-full flex'>
                <a className='ml-20 block p-7' href="#"><img className='h-8' src={Logo} alt="" /></a>
                <div className="flex items-center w-72 justify-evenly ">
                    <Dropdown
                        nome="Marketplace"
                        link={
                            <>
                                <a className="p-3 mb-2 block" href="#">Home</a>
                                <a className="p-3 mb-2 block" href="#">Discover</a>
                                <a className="p-3 mb-2 block" href="#">Activities</a>
                                <a className="p-3 mb-2 block" href="#">Collection Verification</a>
                            </>
                        }
                    />
                    <Dropdown
                        nome="Resources"
                        link={
                            <>
                                <a className="p-3 mb-2 block" href="#">Home</a>
                                <a className="p-3 mb-2 block" href="#">Discover</a>
                            </>
                        }
                    />
                </div>

            </div>

            <div className=' flex items-center h-full'>

                <div className='flex h-10 w-80 bg-zinc-800 rounded-xl'>

                    <svg className='h-6 w-6 mr-2 ml-4 self-center' fill="none" stroke="#fff" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>

                    <input
                        type="search"
                        placeholder='Collection, item, User'
                        className=' h-full w-full rounded-xl bg-zinc-800 outline-0 leading-normal tracking-wide text-gray-400'
                    />

                </div>

                        

            </div>

        </div>

    )
}