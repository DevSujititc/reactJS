import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/DevSujititc')
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data)
    //         setData(data);
    //     })
    // })

    const data = useLoaderData()

  return (
    <div>
      <h1 className='bg-gray-800 text-white text-3xl py-4'>My GitHub Profile</h1>
      <div className='bg-gray-400 text-white'> Follower: {data.followers}</div>
      <img src={data.avatar_url} alt='github picture' />
    </div>
  )
}

export default Github