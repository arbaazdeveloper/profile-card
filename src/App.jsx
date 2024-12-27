import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 const [data,setData]=useState([])

  const getData=async ()=>{
    const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
    const mydata = await response.json();
    console.log(mydata.results)
    setData(mydata.results)

  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
   <div className='bg-custom-gradient h-screen w-screen flex items-center justify-center flex-col gap-10'>
    <h1 className='text-3xl font-bold'>Profile Info</h1>
    {
      data?.map((item,index)=>{
        return <Card key={index} firstName={item.name.title + ' '+item.name.first}
        lastName={item.name.last}
        gender={item.gender}
        phoneNumber={item.phone}
        image={item.picture.large

        }
        />
      })
    }

   </div>
    </>
  )
}

export default App
