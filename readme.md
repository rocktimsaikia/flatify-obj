# flatify-obj ![build](https://travis-ci.com/RocktimSaikia/flatify-obj.svg?branch=master) ![license](https://img.shields.io/github/license/rocktimsaikia/flatify-obj)

> Flatten javascript objects into a single-depth object.

## Install
```bash
npm install flatify-obj
```

## Usage

 ```js
    const flattenObject = require('flatify-obj');

    flattenObject({foo: {unicorn: '🦄'}, bar: 'unicorn'});
    //=> {'foo.unicorn': '🦄', bar: 'unicorn'};

    flattenObject({foo: {unicorn: '🦄'}, bar: 'unicorn'}, {onlyLeaves: true});
    //=> {unicorn: '🦄', bar: 'unicorn'}

    flattenObject({foo: {unicorn: '🦄'}, bar: 'unicorn'}, {onlyLeaves: true, cleanKeys: ['bar']});
    //=> {unicorn: '🦄'}
 ```

> For removal of falsy, empty or nullable values from object , It uses [clean-deep](https://github.com/nunofgs/clean-deep). Refer to their readme to check all the availabe options.

## API

### flattenObject(object, options?)

#### object

Type: `object`<br>
Object to flatten


#### options

##### onlyLeaves

Type: `boolean`<br>
Default: `false`

Only returns the leaf nodes of the object


## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/91206759-48d5d180-e725-11ea-93b5-754d98c007af.png" height="60px"/></a>
