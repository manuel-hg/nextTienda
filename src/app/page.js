import {Users} from "@/components"
//import { useState } from "react"

export const metadata = {
  title: 'Mi pagina especial de home'
}

export default function Home(){
  return(
    //server component
    <section>
      {/** client component/ */}
      <Users/>
    </section>
  )
}

/*"use client"

export default function Home() {
  return (
    <section>
      <h1>Hello world</h1>
      <button onClick={() => {
        alert("hello");
      }}>Click</button>
    </section>
  )
}*/
