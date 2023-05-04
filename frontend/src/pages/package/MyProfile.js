import React, { useState } from 'react'
import PackageCard from './PackageCard'

const MyProfile = () => {

    const [packages, setPackages] = useState([
        {
            "id": 1,
            "packageName": "Package 1",
            "packagePrice": 25000,
        },
        {
            "id": 2,
            "packageName": "Package 2",
            "packagePrice": 14000,
        }
    ])
    return (
        <div>
            {packages.length > 0 ? (
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h1>Admin has sent you these packages</h1>
                    <div className='d-flex justify-content-center'>
                        {
                            packages.map(((item) => (
                                <PackageCard item={item} />
                            )))

                        }
                        
                    </div>
                    <button type="button" class="btn btn-dark" style={{ width:'200px' }}>Not Satisfied (Make Inquiry)</button>
                </div>
            ) :
                <div>No packages</div>
            }

        </div>
    )
}

export default MyProfile
