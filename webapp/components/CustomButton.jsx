import { Colors } from '@/constants/colors'
import React from 'react'

export default function CustomButton({title, cmStyle,  onClick}) {
  return (
    <button onClick={onClick} className={`w-full p-3 rounded-xl text-black shadow hover:text-white text-lg font-semibold text-left  hover:bg-[${Colors.primary}] ${cmStyle}`}>
        {title}
    </button>
  )
}
