import React from 'react'
import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

const StudioNavBar = (props: any) => {
  return (
    <div>
        <div className='flex items-center justify-between p-5 bg-[#1a1a1a]'>
            <Link href="/" className='text-[#ffedd2] flex items-center'>
                <ArrowUturnLeftIcon className='h-6 w-6 text-[#ffedd2] mr-2' />
                Retour au site
            </Link>
        </div>
        <> {props.renderDefault(props)} </>
    </div>
  )
}

export default StudioNavBar