# Validate Page

Getting html from page of localhost then validate the code.  
This package is using [validator.w3.org/nu](https://validator.w3.org/nu/) for validation with [html-validator](https://github.com/zrrrzzt/html-validator) package.  

## usage

Please launch local server before to run below command.

```bash
validate-localhost --port=8000 --path=/any/path
```

## Options

It's able to pass options via command line arguments.

- `--port={port}` - set the `port`. default is `3000`.
- `--path={rootPath}` - set the `rootPath`. default is `/`.
- `--secure` - if passed `--secure` argument then set the protocol to `https`. 
- `--pc` - if passed `--pc` argument UserAgent is behaved like it. this is default.
- `--sp` - if passed `--sp` argument UserAgent is behaved like it.
- `--tb` - if passed `--tb` argument UserAgent is behaved like it.

If you want to use the package in your own script on the Node.js then call the package and pass options like below:

```js
const validateLocalhost = require('validate-localhost');

validateLocalhost({
  port: 8000,
  path: '/any/path',
  sp: true
}).then(result => {/* */}).catch(err => {/* */});
```
