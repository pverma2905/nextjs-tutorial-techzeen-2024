import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight:'900',
    subsets:['latin'],
    display:'swap'
})
const page = () => {
  return (
    <>
    {/* <h2 style={{fontFamily:'Poppins', fontWeight:300}}>Font Optimaization in Next js 14</h2> */}
    <h2 className={poppins.className}>Font Optimaization in Next js 14</h2>
    </>
  )
}

export default page