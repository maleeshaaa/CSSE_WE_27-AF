import React from 'react'

const MyProfile = () => {

    const [packages, setPackages] = useState([
        {
        "packageName":"Package 1",
        "packagePrice": 25000,
        },
        {
        "packageName":"Package 2",
        "packagePrice": 14000,
        }

    ])
  return (
    <div>
        {packages ? (
            <h1>Admin has sent you these packages</h1>
        ):
        <div>No packages</div>
        }
      
    </div>
  )
}

export default MyProfile
