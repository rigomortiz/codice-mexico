module.exports = function (config) {
    config.set({
        // other parameters...
        browsers                : [
            'ChromeHeadlessNoSandbox'
            // other browsers (if any)
        ],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
            // other browsers (if any)
        },
    });
};