
import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

export default async function Page() {
  const user = await authUserSession()
  
  return (
    <div>
      <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold ">Welcome, {user.name} </h3>
      <Image src={user.image} alt="..." height={150} width={150}
      className="mt-2"/>
      <div className="py-8 flex flex-wrap gap-4 justify-center">
          <Link href="/users/dashboard/collection" 
          className="bg-color-secondary text-color-primary 
          font-bold px-4 py-3 text-xl"> 
          My Collection
          </Link>
          <Link href="/users/dashboard/comment" 
          className="bg-color-secondary text-color-primary 
          font-bold px-4 py-3 text-xl"> 
          My Comment
          </Link>
      </div>
    
          </div>
    </div>
  )
}
