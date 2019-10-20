import React from "react"
import "./PlaceType.css"

function PlaceType(props) {
  let placeTypeName = "Other"

  switch (props.type) {
    case "A":
      placeTypeName = "Airport"
      break
    case "C":
      placeTypeName = "City"
      break
    case "T":
      placeTypeName = "Station"
      break
    default:
      placeTypeName = "Other"
  }

  return (
    <span className={`placetype placetype--${props.type}`}>
      {placeTypeName}
    </span>
  )
}

export default PlaceType
