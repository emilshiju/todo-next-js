import connectToMongo from "@/lib/config/db"
import TodoModel from "@/lib/models/TodoModel"
import { request } from "http"
import { NextResponse } from "next/server"

const LoadDB=async()=>{
    await connectToMongo()
}

LoadDB()

export async function GET(req,res,next){


    const todos=await TodoModel.find({})

    return NextResponse.json({todos:todos})

}


export async function POST(req,res,next){

    const {title,description}=await req.json()

    await TodoModel.create({title,description})


    return NextResponse.json({"msg":"TODO created"})

}


export async function DELETE(req,res,next){

    
    const mongoId=await req.nextUrl.searchParams.get('mongoId')
    console.log(mongoId)

    await TodoModel.findByIdAndDelete(mongoId)




    return NextResponse.json({"msg":"TODO DELETED"})

}




export async function PUT(req,res,next){

    
    const mongoId=await req.nextUrl.searchParams.get('mongoId')
    console.log(",,,,,",mongoId,req.body)

    await TodoModel.findByIdAndUpdate(mongoId,{$set:{isCompleted:true}})


    return NextResponse.json({"msg":"TODO COMPLETED"})
    

}

