import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import environment from './environment';

class SayHi extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SayHiQuery {
            sayHi
          }
        `}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <div>{props.sayHi}</div>
            );
          } else {
            return <div>Loading</div>;
          }
        }}
      />
    );

  }
}

export default SayHi;
