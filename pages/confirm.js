import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import { useRouter } from "next/router"
import RideSelector from "./components/RideSelector"

const Confirm = () => {
    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const getPickupCoordinates = (pickup) => {
        ;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoid3JvYmVyc29uZSIsImEiOiJjbGI4OHBnN3kwaW54M29rdTVpdnlkNzJvIn0.viNw-nL81-hmAlyMHejG7Q",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoid3JvYmVyc29uZSIsImEiOiJjbGI4OHBnN3kwaW54M29rdTVpdnlkNzJvIn0.viNw-nL81-hmAlyMHejG7Q",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center)
        })
    }


    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [])


  return (
    <Wrapper>
      <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />

      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
            <ConfirmButton>
            Confirm UberX
            </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 p-4 text-center text-xl
`

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`