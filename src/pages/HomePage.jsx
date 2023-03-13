import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const HomePage = () => {

    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        const r = await fetch('https://exam.avavion.ru/api/services');

        const data = await r.json();

        setServices(data.data);
    }

    useEffect(() => {
        fetchServices();
    }, []);

    console.log(services);

    return (
        <div>
            <div className="services">
                {
                    services.map((service) => {
                        return (
                            <div key={service.id}>
                                <img src={service.image_url} alt={service.name} />
                                <h2>{service.name}</h2>
                                <p>{service.content}</p>

                                <NavLink to={`/services/${service.id}`}>перейти</NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePage