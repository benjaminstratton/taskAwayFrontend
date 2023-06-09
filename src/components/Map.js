import React, { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    // ComboboxOptionText
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const places = ['places']

const Home = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBA3_wIWr7GME5kLqbp4gua65hAIdoTgDg",
        libraries: places,
    })
    if (!isLoaded) return <div>Loading...</div>
    return (
        <Map />
    );
}

const Map = () => {
    const center = useMemo(() => ({ lat: 34, lng: -118 }), [])
    const [selected, setSelected] = useState(null)

    return (
        <>
            <div>
                <PlacesAutocomplete setSelected={setSelected} />
            </div>
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" >
                {selected && <Marker position={selected} />}
            </GoogleMap >

        </>
    )
}

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete()

    const handleSelect = async (address) => {
        setValue(address, false)
        clearSuggestions()

        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])
        setSelected({ lat, lng })
    }

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput value={value} onChange={e => setValue(e.target.value)} disabled={!ready}
                className="combobox-input" placeholder="Search an address" />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}

export default Home;





