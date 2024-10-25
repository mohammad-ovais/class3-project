import Link from "next/link"
function Navbar(){
    return(
        <div style={{ background:"navy",color:"white",width:"100%",}}>
          <Link href="https://nextjs.org/docs/pages/api-refrence/components/link">
          NextJS Link Component
          </Link>
          <br/>
          <Link href="/">
          Home
          </Link>
           <br/>
         <Link href="/about">
         About
         </Link>
           <br/>
        </div>
    )
}
export default Navbar