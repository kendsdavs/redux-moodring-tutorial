import React from 'react';

import CurrentPage from './pages/current'
import EntryPage from './pages/entry'
import TimelinePage from './pages/timeline'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <nav className="pa3">
          <Link to="/" className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns">Mood Ring</Link>
          <div className="tc pb3">
            <Link className="link dim gray f6 f5-ns dib mr3" to="/timeline">Timeline</Link>
            <Link className="link dim gray f6 f5-ns dib mr3" to="/new">Record New Status</Link>
          </div>
        </nav>
        <Route exact path="/" component={CurrentPage} />
        <Route exact path="/new" component={EntryPage} />
        <Route exact path="/timeline" component={TimelinePage} />
      </div>
    </Router>
  )
}

export default App;
