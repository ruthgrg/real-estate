import countries from "world-countries"

const formattedCountires = countries.map(country => ({
    value: country.name.common,
    label: `${country.name.common} ${country.flag}`,
    latlng: country.latlng,
    region: country.region
}));

const useCountries = () => {
    const getAll = () => formattedCountires;
    return {getAll}
}

export default useCountries;