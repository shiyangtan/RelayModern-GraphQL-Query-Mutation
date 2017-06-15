import {Environment, Network, RecordSource, Store} from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);
const handlerProvider = null;

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      // add authentication and other headers here
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const environment = new Environment({
  handlerProvider,
  network,
  store,
});

export default environment;
