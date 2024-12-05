import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link} from '@nextui-org/react'
function NavbarArea() {
  return (
    <>
       <Navbar shouldHideOnScroll isBlurred={false} className='w-full bg-transparent' maxWidth='lg'>
         <NavbarBrand>
            <div className='w-64'>
               <img src="/logo.svg" alt="" />
            </div>
         </NavbarBrand>
         <NavbarContent justify='end'>
            <NavbarItem>
                <Button as={Link} color='primary' variant='bordered' radius='full'>
                    Contact
                </Button>
            </NavbarItem>
         </NavbarContent>
       </Navbar>
    </>
  )
}

export default NavbarArea;