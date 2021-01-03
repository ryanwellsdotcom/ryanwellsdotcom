# ryanwellsdotcom

Personal website for [Ryan Wells](https://ryanwells.com).

## Server Environments

Gulp has been added for task automation. To set up the environment, run:

```sh
$ npm ci
```

### Production

The quickest way to view the latest production build in a browser is to run:

```sh
$ gulp serve-prod
```

This will launch an instance of your default browser and serve the site from http://localhost:8080/.

To generate a production build, run:

```sh
$ gulp prod
```

The production build command regenerates the following structure:

```
ryanwellsdotcom
└── app
    └── build
        └── prod
            ├──  dist
            │    ├── css
            │    │   ├── style.css
            │    │   └── maps
            │    ├── img
            │    └── js
            │        ├── main.js
            │        └── maps
            └── index.html
```

### Development

To run the development server and watch for changes, run:

```sh
$ gulp serve-dev
```

This will launch an instance of your default browser and serve the site from http://localhost:3000/. This server is configured for hot reloading. It's possible to run the dev and prod servers concurrently; however, only the development server is watching for changes. A production build would need to be run following the last development build. It is also possible to compile a development build without starting the server by running:

```sh
$ gulp dev
```

Running the development build command or making changes to the source files while the development server is running regenerates the following structure:

```
ryanwellsdotcom
└── app
    └── build
        └── dev
            ├──  dist
            │    ├── css
            │    │   ├── style.css
            │    │   └── maps
            │    ├── img
            │    └── js
            │        ├── main.js
            │        └── maps
            └── index.html
```

Changes to files should be made from within the /src/ directory:

```
ryanwellsdotcom
└── src
    ├── css
    │   └── style.css
    ├── img
    ├── js
    │   └── main.js
    └── index.html
```

## Dependencies

- [normalize.css](https://necolas.github.io/normalize.css/)
