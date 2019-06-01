import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

const styles = {
  item: {
    alignItems: 'center',
    border: '1px solid #eee',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 20,
    width: '100%'
  },

  content: {
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'left'
  },

  button: {
    backgroundColor: '#333',
    borderRadius: 3,
    color: '#fff',
    fontSize: 10,
    fontWeight: 600,
    padding: 6,
    textDecoration: 'none',
    textTransform: 'uppercase'
  }
}

const LaunchItem = ({ launch, classes }) => (
  <div className={classes.item}>
    <div className={classes.content}>
      Name: {launch.mission_name}<br />
      Flight number: {launch.flight_number}<br />
      Date: <Moment format="MMMM Do YYYY, h:mm a">{launch.launch_date_local}</Moment>
    </div>
    <Link to={`/launch/${launch.flight_number}`} className={classes.button}>Launch Details</Link>
  </div>
)

export default withStyles(styles)(LaunchItem)