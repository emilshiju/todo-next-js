


const Todo=({id,title,description,complete,mongoId,deleteTodo,updateTodo})=>{

    return (
        <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {id+1}
                </th>
                <td className="px-6 py-4">
                    {title}
                </td>
                <td className="px-6 py-4">
                    {description}
                </td>
                <td className="px-6 py-4">
                   {complete?"completed":"pending"}
                </td>
                <td className="px-6 py-4 flex gap-1">
                   <button onClick={()=>deleteTodo(mongoId)} className="py-2 px-4 bg-red-500 text-white">Delete</button>
                   <button  onClick={()=>updateTodo(mongoId)} className="py-2 px-4 bg-green-500 text-white">Done</button>
                </td>
            </tr>
           
    )
}

export default Todo