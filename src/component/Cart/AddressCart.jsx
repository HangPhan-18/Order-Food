import { Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

const AddressCart = (item, showButton, handleSelectAddress) => {

  return (
    <Card className= "flex gap-5 w-64 p-5">
        <HomeIcon/>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Home</h1>
                <p>
                    CanTho city, VietNam 
                </p>
                {showButton && (<Button variant="outlined" fullwidth="true" onClick={() => handleSelectAddress(item)}>Select</Button>)}
            
        </div>
    
    </Card>
  )
}

export default AddressCart