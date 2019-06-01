import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query }  from 'react-apollo'
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

class Launches extends Component {
  render() {
    return (
      <div>
        <h1>SpaceX Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>
            if (error) console.log('ERROR!', error)

            return (
              <>
                {data.launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />)}
              </>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Launches