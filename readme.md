# flatify-obj ![build](https://travis-ci.com/RocktimSaikia/flatify-obj.svg?branch=master) ![license](https://img.shields.io/github/license/rocktimsaikia/flatify-obj)

> Flatten nested javascript objects into a single-depth object.

## Install
```bash
$ npm install flatify-obj
```

## Usage

 ```js
    const flatifyObject = require('flatify-obj');

    flatifyObject({foo: {bar: {unicorn: '🦄'}}})
    //=> { 'foo.bar.unicorn': '🦄' }

    flatifyObject({foo: {unicorn: '🦄'}, bar: 'unicorn'}, {onlyLeaves: true});
    //=> {unicorn: '🦄', bar: 'unicorn'}
 ```

## API

### flatifyObject(object, options?)

#### object

Type: `object`<br>
Object to flatten


#### options

##### onlyLeaves

Type: `boolean`<br>
Default: `false`

Removes the parent property and only returns the leaf nodes of the object


## License

MIT ©️ [Rocktim Saikia](https://rocktim.xyz/);
