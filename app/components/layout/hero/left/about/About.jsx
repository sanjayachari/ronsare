import { Context } from '@/app/contexts/Context'
import React, { useContext } from 'react'

const About = () => {
  const {data} = useContext(Context)
  return (
<div dangerouslySetInnerHTML={{ __html: data.description }} />
  )
}

export default About