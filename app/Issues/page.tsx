
import React from 'react'
import { Button } from '@radix-ui/themes';
 
import Link from 'next/link';


const IssuesPage = () => {
  return (
    <div >
     <button><Link  href='/Issues/new'>New issue </Link> </button>
    </div>
  )
}

export default IssuesPage

