import React, { useEffect, useState } from 'react'

const ApiExample = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users/1');
        const result = await response.json();
        setData(result)
      } catch (error) {
        console.log('Error fetching data', error);        
      }
    }

    fetchData()
  }, [])

  console.log(data);

  return (
    <div>
      <h1>Api Data</h1>
     <p>{data.firstName}</p>
     <p>{data.lastName}</p>
    </div>
  )
}

export default ApiExample