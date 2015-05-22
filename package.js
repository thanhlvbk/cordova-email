Package.describe({
    name: 'particle4dev:cordova-email',
    version: '1.0.0',
    summary: 'The plugin manages the editing and sending an email message',
    git: 'https://github.com/thanhlvbk/cordova-email.git',
});

Cordova.depends({
    "de.appplant.cordova.plugin.email-composer": "0.8.2"
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use('particle4dev:rsvpjs@3.0.18', 'client');
    api.addFiles('cordova-email.js', 'web.cordova');
    if (api.export)
        api.export('CORDOVA_EMAIL', 'web.cordova');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('particle4dev:cordova-email');
    api.addFiles('cordova-email-tests.js');
});
