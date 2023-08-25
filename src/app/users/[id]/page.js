"use client"
import { useParams } from "next/navigation"
export default function UsersPage(){
    const params = useParams();
    console.log(params);
    return(
        <div>
            Users Pages
        </div>
    )
}