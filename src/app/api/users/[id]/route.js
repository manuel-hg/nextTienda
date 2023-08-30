import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    console.log("Token" + process.env.TOKEN);
    console.log("Secret" + process.env.SECRET_KEY);

    const {searchParams} = new URL(request.url);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();

    return NextResponse.json({
        message: "Obteniendo datos",
        params,
        data: data
    });
}
