
"use client"
import Todo from "@/components/todo";
import axios from "axios";

import { useEffect, useState } from "react";

import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';



export default function Home() {


  const [formData,setFormData]=useState({title:"",description:""})

  const [todoData,setTodoData]=useState([])

  const fetchTodos=async()=>{

    const response =await axios('/api');

    setTodoData(response.data.todos)
  }

  useEffect(()=>{
    fetchTodos()
  },[])


  const onChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setFormData(form=>({...formData,[name]:value}))
  }

  const onSubmitHandler=async(e)=>{
      e.preventDefault()

      try{


        const response=await axios.post('/api',formData)

        toast.success(response.data.msg)

        // toast.success("SUCCESS")
        setFormData({title:"",description:""})

        fetchTodos()

      }catch(error){

        toast.error("error")

      }


  }


  const delteTodo=async(mongoId)=>{
    console.log("ivide",mongoId)
    const response=await axios.delete('/api',{params:{mongoId:mongoId}})
    toast.success(response.data.msg)
    fetchTodos()
  }

  const updateTodo=async(id)=>{
    console.log("lksjfi",id)

    const response=await axios.put('/api',{},{params:{mongoId:id}})

    toast.success(response.data.msg)
    fetchTodos()
  }


  return (
    <>
    <ToastContainer  />
    <form  onSubmit={onSubmitHandler} className="flex items-start  flex-col gap-2 w-[600px] mt-24 px-2 mx-auto  ">

<input  value={formData.title} onChange={onChange} type="name" name='title'  placeholder="Enter Title " className="px-3 py-2 border-2  w-full"></input>
<textarea  value={formData.description} onChange={onChange}  name="description" placeholder="Enter Description " className="px-3 py-2 border-2 w-full"></textarea>
<button  type="submit" className="bg-orange-600 py-3 px-11 text-white">Add Todo</button>

    </form>



    <div className="relative overflow-x-auto  mt-24 w-[60%]  mx-auto ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {todoData.map((a,b)=>{
              return (
                <Todo  key={b} id={b} title={a.title} description={a.description} complete={a.isCompleted} mongoId={a._id}   deleteTodo={delteTodo}  updateTodo={updateTodo} />
              )
            })}
            
        </tbody>
    </table>
</div>


</>

  );
}
