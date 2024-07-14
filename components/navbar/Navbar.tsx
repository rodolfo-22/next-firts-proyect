import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink"

const navItems = [ 
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

const Navbar = () => {
  return (
    <nav className='flex bg-blue-8000 bg-opacity-30 p-2 m-2 rounded'>

        <Link className='text-white text-xl mr-4' href='/'>
        <HomeIcon size={24} className='mr-2'/>
        Home
        </Link>

        <div className='flex flex-1'></div>

        {
        navItems.map(navItems => (
          <ActiveLink key={navItems.path} {...navItems} />
        ))
        }

      {/*}  <Link className='text-white text-xl mr-4' href='/about'>About</Link> 
        <Link className='text-white text-xl mr-4' href='/pricing'>Pricing</Link> 
        <Link className='text-white text-xl mr-4' href='/contact'>Contac</Link>*/}  

    </nav>
  )
}

export default Navbar
