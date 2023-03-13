import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const SinglePage = () => {

    const params = useParams();

    const [service, setServise] = useState({});

    useEffect(() => {
        fetch(`https://exam.avavion.ru/api/services/${params.id}`)
        .then((r) => r.json())
        .then((data) => setServise(data.data));
    }, []);

    return (
        <div>
            <div key={service.id}>
                <img src={service.image_url} alt={service.name} />
                <h2>{service.name}</h2>
                <p>{service.content}</p>

                <NavLink to={`/`}>назад</NavLink>
            </div>
        </div>
    )
}

export default SinglePage