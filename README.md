# Cordova sqlite bootstrap test app

Template to demonstrate reproducible issues with Cordova sqlite plugin. May be used as a starter project.

**AUTHOR:** [@brodybits (Christopher J. Brody aka Chris Brody)](https://github.com/brodybits)

**LICENSE:** [CC0 1.0 (public domain)](https://creativecommons.org/publicdomain/zero/1.0/)

**NOTE:** This project includes JQuery (2.2.4) and Bootstrap (3.3.6) under the MIT license. Otherwise there is no code copied from other sources.

**IMPORTANT:** Whitelist and intent items are omitted from this test app.

## Dependencies

- Bootstrap (3.3.6) - included (MIT license)
- JQuery (2.2.4) - included (MIT license)
- `cordova-plugin-whitelist` - specified in `config.xml`
- `cordova-plugin-dialogs` - specified in `config.xml`
- Cordova sqlite plugin - please add the desired version from the Cordova CLI as described below

NOTE: The `cordova-plugin-whitelist` and `cordova-plugin-dialogs` were added added using the `--save` flag to ensure that these plugins would be automatically installed. It is recommended to use the `--save` flags to add any other plugins rather than adding such plugins to git.

## To add another plugin

```shell
cordova plugin add my-plugin-id --save
```

## How to run

1. Add the desired Cordova sqlite plugin version, for example:

```shell
cordova plugin add cordova-sqlite-storage --save
```

2. Add the desired platform(s), for example:

```shell
cordova platform add android
```

3. Do `cordova prepare` (may not always be necessary but good to be on the safe side):

```shell
cordova prepare
```

4. Run it on your mobile emulator or device, for example:

```shell
cordova run android
```

## Functionality

- Upon startup: open a database and CREATE the test table
- Show a native alert dialog
- Echo test
- Self test
- Location reload
- String test 1
- String test 2 (string as a SQL parameter)
- Show record
- Add record
- Add 100 records from JavaScript object after delay
- Delete all records
