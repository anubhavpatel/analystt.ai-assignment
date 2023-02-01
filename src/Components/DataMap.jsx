import React from 'react'
import Card from './Card'
const DataMap = ({myData}) => {
  return (
    <div>
        {
            myData.map((i,id)=>{
                return (
                    <Card  
                    key={i.id}
                    name={i.name}
                    address={i.address}
                    email={i.email}
                    phone={i.phone}
                    company={i.company}
                    username={i.username}
                    website={i.website}
                  />
                )
            })
        }
    </div>
  )
}

export default DataMap