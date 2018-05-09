# Gulp Prettier Eslint [![Build Status](https://travis-ci.org/o2team/gulp-prettier-eslint.svg?branch=master)](https://travis-ci.org/o2team/gulp-prettier-eslint)

A [Gulp](http://gulpjs.com/) plugin which allows the users to use [prettier-eslint](https://github.com/prettier/prettier-eslint).

## Install

```
yarn add @o2team/gulp-prettier-eslint --dev
```

## Usage

Simply pipe the input, and pass in arguments that you would to the regular format function.

```js
const gulp = require('gulp');
const format = require('@o2team/gulp-prettier-eslint');

gulp.task('default', () => {
  return gulp.src('*.js')
    .pipe(format({ 
      eslintConfig: {
        parserOptions: {
          ecmaVersion: 7
        },
        rules: {
          semi: ["error", "never"]
        }
      },
      prettierOptions: {
        bracketSpacing: true
      },
      fallbackPrettierOptions: {
        singleQuote: false
      }
     }))
    .pipe(gulp.dest('./dist'));
});
```

## API

### format([formatOptions])

#### formatOptions

Type: `Object`

Consult the `prettier-eslint` [options](https://github.com/prettier/prettier-eslint#options).

# Donation

If you find this project useful, you can buy us a cup of coffee:    

<a href="https://www.paypal.me/chuyik" target="blank">
<img width="200" src="https://storage.360buyimg.com/mtd/home/donate_paypal_min1495016435786.png" alt="">
</a><br>     

<img width="650" src="https://storage.360buyimg.com/mtd/home/donate_cn1495017701926.png" alt="">

## Acknowledgements
We are grateful to the authors of existing related projects for their ideas and collaboration:

- [@bhargavrpatel](https://github.com/bhargavrpatel/gulp-prettier)

## Contributors
[![chuyik](https://avatars2.githubusercontent.com/u/6262943?v=3&s=120)](https://github.com/chuyik) |
:---:|
[chuyik](https://github.com/chuyik) |
