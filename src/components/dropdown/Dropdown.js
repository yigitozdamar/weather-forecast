import { useState, useEffect } from 'react'
import citiesJSON from './cities_of_turkey.json'
import { useFormik } from 'formik'
import SelectedCity from '../../context/WeatherContext'

function Dropdown() {
    const [cities] = useState(citiesJSON)
    const { getData } = SelectedCity()
    const { values, handleChange } = useFormik({
        initialValues: {
            "city": "Muğla",
        }
    })

    useEffect(() => {
        getData(values.city)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.city])
    return (
        <form>
            <select
                onChange={handleChange}
                name="city"
                value={values.city}
            >
                {cities.map((city) => (
                    <option key={city.id} value={city.name}>{city.name}</option>
                ))}
            </select>
        </form>
    )
}

export default Dropdown
