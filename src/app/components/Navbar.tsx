import Link from "next/link";

export default function Navbar(){
    return (
        <div >
            <Link href="/"> <button className="capitalize font-bold text-pretty text-white bg-blue-700 rounded-xl w-20 h-8 hover:bg-blue-400 hover:text-black m-4">home</button> </Link>
          <Link href="/about"> <button className="capitalize font-bold text-pretty text-white bg-blue-700 rounded-xl w-20 h-8 hover:bg-blue-400 hover:text-black mr-5 ">about</button> </Link>
          <Link href="/contact"> <button className="capitalize font-bold text-pretty text-white bg-blue-700 rounded-xl w-20 h-8 hover:bg-blue-400 hover:text-black mr-5 ">contact</button>  </Link>
          <Link href="/contact/gmail"> <button className="capitalize font-bold text-pretty text-white bg-blue-700 rounded-xl w-20 h-8 hover:bg-blue-400 hover:text-black mr-5" >gmail</button> </Link>
          <Link href="/products"> <button className="capitalize font-bold text-pretty text-white bg-blue-700 rounded-xl w-20 h-8 hover:bg-blue-400 hover:text-black mr-5" >Products</button> </Link>
        <h1 className=""></h1>
        </div>

    )
}