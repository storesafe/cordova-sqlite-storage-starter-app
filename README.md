# Cordova SQLite storage starter app

**AUTHOR:** [@brodybits (Christopher J. Brody aka Chris Brody)](https://github.com/brodybits)

**LICENSE:** [CC0 1.0 (public domain)](https://creativecommons.org/publicdomain/zero/1.0/)

**NOTE:** This project includes JQuery (3.3.1) and Bootstrap 3 (3.3.7) under the MIT license. Otherwise there is no code copied from other sources.

**IMPORTANT:** Whitelist and intent items are omitted from this app.

**ADDITIONAL NOTE:** This project is now updated to use `cordova-sqlite-storage` 2.3.x which requires Visual Studio 2017 for Windows 10 (UWP) build.

## Dependencies

- Bootstrap (3.3.7) - included (MIT license)
- JQuery (3.3.1) - included (MIT license)
- `cordova-plugin-dialogs` - specified in `config.xml`
- `cordova-sqlite-storage` plugin - specified in `config.xml`

IMPORTANT NOTE: The plugins were added using the `--save` flag to ensure that they would be tracked in `config.xml` for automatic installation. It is recommended to use the `--save` flag on Cordova pre-7.0 to track any other plugins added in `config.xml` (this is automatic starting with Cordova `7.0`). It is NOT recommended to commit `plugins` or `platforms` directories to git or any other form of source code control.

Additional note: `cordova-plugin-dialogs` does not currently support macOS ("osx"). As a workaround this project automatically uses `window.alert` if necessary.

## To add another plugin

```shell
cordova plugin add my-plugin-id --save
```

NOTE: `--save` flag is automatic and not needed in Cordova 7.0 and greater

## How to run

* Add the desired platform(s), for example:

```shell
cordova platform add android
```

* OPTIONAL: Do `cordova prepare` (may be needed in certain situations):

```shell
cordova prepare
```

* Run it on your mobile emulator or device, for example:

```shell
cordova run android
```

or

```shell
cordova run android --device
```

## Functionality

- Upon startup: open a database and CREATE the test table
- Alert dialog test (native alert if possible)
- Echo test
- Self test
- Location reload
- String test 1
- String test 2 (string as a SQL parameter)
- Show record
- Add record
- Add 100 records from JavaScript object after delay
- Delete all records
- Follow link to page 2
- Change window.location to page 2

## Multi-page test

It is possible to switch between two pages using "follow link" buttons. The main page also has a button to go to page 2 by changing `window.location`. There is also a button on both pages to try `location.reload()`.

The sqlite plugin should continue to work after the user changes to another page or triggers `location.reload()`.
