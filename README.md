# pincode-lat-long

Get latitude and longitude value for indian pincode.


## Features

- Zero dependencies
- Only Indian dataset as of now, more coming soon.

## How to use

- Include package in your project

```bash
npm install --save pincode-lat-long
or
yarn add pincode-lat-long
```

```javascript
const pincode = require('pincode-lat-long')
console.log(pincode.getlatlong(610204))

/*
{ "lat": 26.384367,
  "long": 88.187668
}
 */
```