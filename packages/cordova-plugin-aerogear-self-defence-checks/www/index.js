module.exports = {
    hasScreenLock: function (success, error){
        cordova.exec(success, error, "ScreenLockCheck", "hasScreenLock", [null])
    }
}