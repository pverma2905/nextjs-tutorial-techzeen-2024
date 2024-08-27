import React from 'react'
import Image from 'next/image'
import Img from '/public/next.svg'
const ImageOptimization = () => {
    console.log(Img)
  return (
    <>
    <h2>Image Optimization in next js 14</h2>
    {/* <Image src={Img} alt='Next JS Image'/>
    <img src={Img.src} alt='Img'/> */}
    <Image src={'https://images.pexels.com/photos/27979843/pexels-photo-27979843/free-photo-of-a-car-is-parked-in-front-of-a-blue-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='pixel image' height={400} width={400}/>
    </>
  )
}

export default ImageOptimization