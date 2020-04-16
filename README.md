# Parcel Boilerplate

> This is a simple and easy workflow for front-end development using vanila javascript

## Features:

1. This boilerplate shiped with bootstrap 4
2. Easy to setup
3. Using modren javascript features
4. Comes with babel configured
5. Similar to react
6. uses dom directly
7. Super fast
8. uses scss to customize bootstrap 4 components

---

### Setup

1. clone this repository

```
$ git clone https://github.com/W2AlharbiMe/parcel-boilerplate.git
```

2. cd in the directory and run

```
$ npm install # you can also use yarn
```

3. run development command

```
$ npm run dev # or use yarn
```

4. Start developemnt

---

### Structure

```
.
|-- .babelrc # babel configurations goes here
|-- package.json
|-- public
|   `-- index.html # application entry
`-- src # all components goes here
    |-- App.jsx # the entry component
    |-- app.js # the application entry
    |-- compiler
    |   `-- index.js # the compile function
    `-- scss # all styles goes here
        |-- _defaults.scss #  to overwrite bootstrap 4 default styles
        |-- _variables.scss # to overwrite bootstrap 4 default variables
        |-- app.scss # entry scss file
        `-- components # component styles goes here
            `-- index.scss # import all the scss files to this file
```

---

### Build The Application

**Run this script to build the application**

```
$ npm run build # or use yarn
```

**this will build the `dist` directory**
