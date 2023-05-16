import React, { useEffect, useState } from 'react'
import PackageCard from './PackageCard'
import axios from 'axios'

const MyProfile = () => {

    const [packages, setPackages] = useState([
        
    ])
const userId = "64569c01d4d5180affb57eb3";
    const fetchPackages = ()=>{
        axios.get(`http://localhost:8080/api/package/${userId}`)
        .then(response => {
            // Handle the received data here
            const packages = response.data;
            setPackages(packages);
            console.log(packages);
        })
        .catch(error => {
            // Handle the error here
            console.error(error);
        });
    }

    useEffect(() => {
        fetchPackages();
      }, []);

    
    return (
        <div>
            {packages.length > 0 ? (
                <div >
                    <h1>Admin has sent you these packages</h1>
                    <div className='d-flex justify-content-center'>
                        {
                            packages.map(((item) => (
                                <PackageCard item={item} />
                                
                            )))
                        }
                    </div>
                    
                </div>
            ) :
                <div>No packages</div>
            }

        </div>
    )
}

export default MyProfile
