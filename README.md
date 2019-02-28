<div align="center">
  <h1>hapijs-array-query-params</h1>
  <strong>This is an example used to illustrate a blog post about sending array as query parameters</strong>
</div>

<hr>

# Contents

This example goal is to demonstrate multiple way of handling array query parameters when developing with HapiJS. There are 3 points of interest:

- `client.js`: client side code which uses `axios` to call both HapiJS servers.
- `server-query-setting.js`: first HapiJS server which handles array query params using the `server.options.query.parser` option.
- `server-joi-example.js`: second HapiJS server which handles array query params using `joi` validation.

# Usage

`npm start` will start both servers and loads a `webpack-dev-server` for the client side.
