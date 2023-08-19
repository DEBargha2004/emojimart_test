'use client'

import  Picker  from '@emoji-mart/react'
import {data} from '@emoji-mart/data'
import { useState } from 'react'
import Image from 'next/image'

export default function Home () {

  const [emojiButtonStatus, setEmojiButtonStatus] = useState({
    clicked: false,
    hover: false
  })
  const [userInput, setUserInput] = useState('')

  return (
    <>
      <div
          className={`p-1 w-fit hover:bg-slate-200 ${
            emojiButtonStatus.clicked ? `bg-slate-200` : ``
          } transition-all rounded-md relative`}
          onMouseEnter={() =>
            setEmojiButtonStatus(prev => ({ ...prev, hover: true }))
          }
          onMouseLeave={() =>
            setEmojiButtonStatus(prev => ({
              ...prev,
              hover: false
            }))
          }
          onClick={() =>
            setEmojiButtonStatus(prev => ({
              ...prev,
              clicked: !prev.clicked
            }))
          }
          id='emojis'
        >
          <Image
            height={32}
            width={32}
            src='https://cdn-icons-png.flaticon.com/512/166/166538.png'
            className='h-8 cursor-pointer'
            alt='emoji-icon'
            id='emoji_icon'
          />
          {emojiButtonStatus.clicked || emojiButtonStatus.hover ? (
            <div className='absolute top-8'>
              <Picker
                data={data}
                onEmojiSelect={e => {
                  let { native } = e
                  setUserInput(userInput+native)
                }}
              />
            </div>
          ) : null}
        </div>
        <p>{userInput}</p>
    </>
  )
}
