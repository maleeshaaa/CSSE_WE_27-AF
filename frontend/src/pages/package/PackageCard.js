import React from 'react'
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ item }) => {
    const navigate = useNavigate();
    
    return (
        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">{item.packageName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{item.packagePrice}</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-dark" style={{ width:'200px' }} onClick={()=>navigate(`/package/${item.id}`)}>View Package</button>
                
            </div>
        </div>
    )
}

export default PackageCard
