import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const LaunchItem = ({ launch }) => (
  <div className="item">
    Name: {launch.mission_name}<br />
    Flight number: {launch.flight_number}<br />
    Date: <Moment format="MMMM Do YYYY, h:mm a">{launch.launch_date_local}</Moment>
    <Link to={`/launch/${launch.flight_number}`}>Launch Details</Link>
  </div>
)

export default LaunchItem