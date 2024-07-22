import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { BiHome } from 'react-icons/bi'
import { BsMailbox } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
function Contact() {
  return (
    <div className="border-t border-neutral-900 pb-4">

        <h1 className='my-20 text-center text-4xl'>Contact</h1>
        <div className="pt-4  flex flex-wrap gap-x-4 lg:gap-x-20 items-center justify-center ">
            <div className="flex flex-wrap ">
                <BsPhone className="text-xl"/><span>+1(443)-509-7417</span>
            </div>
            <div className="flex flex-wrap">
                <CgMail className="text-xl" /><span>kemidisandy@gmail.com</span>
            </div>
            <div className="flex flex-wrap">
                <BiHome className="text-xl"/><span>4725 Belwood Grn, Halethorpe, MD. 21227</span>
            </div>

        </div>
    </div>
  )
}

export default Contact