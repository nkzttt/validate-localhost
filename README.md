# Validate Page

Getting html from page of localhost then validate the code.  

## usage

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
