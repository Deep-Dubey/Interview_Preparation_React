import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(0)

    const fetchUser = async() => {
        const responce = await fetch('https://random-data-api.com/api/v2/users')
        const userData = await responce.json()
        setData(userData)
    }

    useEffect(()=>{
        fetchUser()
    },[])

    useEffect(()=>{
        const Interval = setInterval(()=>{
            setLoading((prev)=>prev+1)
        },1000)
        return()=>{
            clearInterval(Interval)
            alert("Interval Cleared")
        }
    },[])

  return (
    <div>
        <h1>UseEffectHook</h1>
        {data.first_name} {data.last_name}

        <h1>Cleanup function</h1>
        {loading}
    </div>
  )
}

export default UseEffectHook