import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

const GRAPHQL_SCHEMA_URL = process.env.GRAPHQL_SCHEMA_URL;

class Test extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Voyager introspection={this.introspectionProvider} displayOptions={{skipRelay: false}}/>
    )
  }

  introspectionProvider(query) {
    return fetch(GRAPHQL_SCHEMA_URL, {
      method: 'get',
    }).then(response => response.json());
  }
}

ReactDOM.render(<Test/>, document.getElementById('voyager'));
