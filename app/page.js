'use client'

import  Picker  from '@emoji-mart/react'
import {data} from '@emoji-mart/data'
import { useState } from 'react'

export default function Home () {
  const [show, setShow] = useState(false)
  return (
    <>
      <button
        className='px-2 py-1 bg-gradient-to-r from-indigo-500 to-violet-500'
        onClick={() => setShow(prev => !prev)}
      >
        Click for emoji
      </button>
      {show ? (
        <Picker
        data={data}
          onEmojiSelect={e => {
            let { native } = e
            console.log(native)
          }}
        />
      ) : null}
    </>
  )
}
