/**
 * exports
 */
CORDOVA_EMAIL = {};
(function(){
    var self = this;
    self.isAvailable = function(){
        var deferred = RSVP.defer();
        cordova.plugins.email.isAvailable(function (isAvailable) {
            if (isAvailable) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
        });
        return deferred.promise;
    };
    self.open = function (properties) {
        var deferred = RSVP.defer();

        cordova.plugins.email.open(properties, function () {
            deferred.reject(); // user closed email composer
        });

        return deferred.promise;
    };
    self.addAlias = function (app, schema) {
        cordova.plugins.email.addAlias(app, schema);
    };
}).apply(CORDOVA_EMAIL);