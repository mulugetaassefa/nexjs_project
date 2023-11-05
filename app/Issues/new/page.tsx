'use client';

import { TextArea, TextField  } from '@radix-ui/themes';
import React from 'react'


const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
     <TextField.Root>
       <TextField.Input   placeholder="title..." />
   </TextField.Root>
   <TextArea   placeholder='Description...' />
   <button>Submit New Issue</button>
    </div>
  )
}

export default NewIssuePage
