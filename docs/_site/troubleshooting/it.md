it.md
- When using karma-webpack it's best not to use the `webpack.ProvidePlugin` for this. Instead just add `node_modules/whatwg-fetch/fetch.js` to your list of files to include, or require it directly into your tests before requiring fetch-mock.

- chaining

- note that end matches qs, path matches only path


Put this with the spy() docs
When using `node-fetch`, `fetch-mock` will use the instance you have installed. The one exception is that a reference to `fetchMock.config.fetch = require('node-fetch')` is required if you intend to use the `.spy()` method)
{: .info}


 to Within individual tests `.catch()` and `spy()` can be used for fine-grained control of this"
