import React from 'react'
import axios from 'axios'

import MapGL, {  Marker, Popup } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

import PubCard from '../pubs/PubCard'

export default class PubIndex extends React.Component {
state = {
  pubs: []
}

aysnc componentDidMount() {
  
}

render() {
  return (
    <h1>Pub Index Page</h1>
  )
}
}