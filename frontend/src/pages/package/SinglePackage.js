import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SinglePackage = () => {

  const { id } = useParams();
  const [showPackage, setShowPackage] = useState(false);

  //added when payment had done
  const [unlockedPackage, setUnlockedPackage] = useState(
    {
      "id": 1,
      "userId": 1,
      "packageId": "p2",
      "packageName": "Package 2",
      "description": "We are thrilled to present you with a tailor-made travel package that has been created exclusively for your request. This five-day adventure will take you through the scenic and historic provinces of Central Sri Lanka, specifically Kandy and Matale. These districts are rich with cultural and natural attractions that will leave you in awe. ",
      "details": "The journey begins on May 15th, 2023, and will take you on a captivating journey through the heart of Sri Lanka. You will visit world-famous destinations like the Temple of the Tooth in Kandy, a UNESCO World Heritage Site, Matale Alu Viharaya and explore the scenic beauty of the Knuckles Mountain Range, Sembuwaththa Lake, Hunnas Falls and Mandaram Nuwara. ",
      "packagePrice": 25000,
    }
  );

  useEffect(() => {
    // check the whether the user have access to the particular package
    const fetchData = async () => {
      try {
        const userId = "gssh";
        const packageId = id;
        const response = await axios.get(`http://localhost:8080/api/transaction/${userId}/${packageId}`, {
          params: {
            userId: userId,
            packageId: packageId,
          },
        });
        
        setShowPackage(response.data.success);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    
  },);

  const fetchPackage = () => {
    const userId = 2;
    const packageId = 2;
    if (userId == 2 && packageId == 2) {
      setShowPackage(false);
    }
  }


  return (
    <div>

      {showPackage ? (
        <div>
          <div class="package-details">
            <h2>{unlockedPackage.packageName}</h2>
            <p>{unlockedPackage.description}</p>
            <p>{unlockedPackage.details}</p>

          </div>
        </div>
      ) :
        <div>
          <h1>You don't have access to view this package unless you purchase it</h1>
          <button type="submit" class="btn btn-dark" style={{ width:'200px' }}>Pay</button>
        </div>
      }
    </div>
  )
}

export default SinglePackage