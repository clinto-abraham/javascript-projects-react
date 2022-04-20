import * as React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
//   import { getTodos, postTodo } from '../my-api'
import { Outlet } from 'react-router-dom'
import SkeletonBasic from './Skeleton';
const postTodo =(a)=> console.log(a)

const API = async ()=> {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos')
    return data.json();
} 

  function Photos() {
    // Access the client
    const queryClient = useQueryClient()
  
    // Queries
    const { data, status } = useQuery('todos', API);
    console.log(data, status)
  
    //Mutations
    const mutation = useMutation(postTodo, {
      onSuccess: () => {
        console.log(`Invalidate and refetch`)
        queryClient.invalidateQueries('todos')
      },
    })
  
    return (
      <div>
          <h1>{status}</h1>
        <ul>
          {status === 'success' ? data.map(todo => (
            <p key={todo.id}>{todo.title}</p>

          )) : <SkeletonBasic /> }
        </ul>
  
        <button
        
        >
          Add Todo
        </button>
        <p>{status === "error" ? 
        <span>Error loading data. Kindly check the internet connection</span> :
         null}</p>
         <Outlet />
      </div>
    )
  }
  
  // Create a client
  const queryClient = new QueryClient()
  
  export default function ReactQueryApp() {
    return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
        <Photos />
      </QueryClientProvider>
    )
  }
  
  
  
  