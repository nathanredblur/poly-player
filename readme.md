# poly-player

> Bilingual Player

**Prerequisites:**
- [WebChimera.js prerequisites](https://github.com/RSATom/WebChimera.js#build-prerequisites)

**PostInstal**
check the latest atom version
https://github.com/atom/electron/releases

```
cd node_modules/wcjs-player/node_modules/wcjs-renderer/node_modules/webchimera.js

export npm_config_wcjs_runtime="electron"
export npm_config_wcjs_runtime_version="0.30.2"

npm install
```

Download and extract
https://github.com/RSATom/WebChimera.js/releases/download/v.0.1.3/libvlc_2.2.1_mac.zip
into

```
node_modules/wcjs-player/node_modules/wcjs-renderer/node_modules/webchimera.js/build/Release
```


## Dev

```
$ npm install
```

### Run

```
$ npm start
```

### Build

```
$ npm run build
```

Builds the app for OS X, Linux, and Windows, using [electron-packager](https://github.com/maxogden/electron-packager).


## License

MIT © [Nathan Redblur](https://github.com/nathanredblur)
