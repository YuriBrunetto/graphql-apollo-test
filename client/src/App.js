import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import withStyles from 'react-jss'

import Launches from './components/Launches'
import Launch from './components/Launch'

// styles
const styles = {
  App: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center'
  }
}

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={styles.App}>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default withStyles(styles)(App)
