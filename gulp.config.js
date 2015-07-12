module.exports = function () {
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + 'app/';

    var temp = './.tmp/';

    var config = {
        allJS: [
            './src/**/*.js',
            './*.js'
        ],
        build:'./build/',
        client: client,
        index: client + 'index.html',
        css: temp + 'styles.css',
        fonts:'./bower_components/font-awesome/fonts/**/*.*',
        html: clientApp + '**/*.html',
        htmlTemplates: clientApp + '**/*.html',
        images:client + 'images/**/*.*',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        less: client + 'styles/styles.less',
        server: server,
        temp: temp,
        /*
         * Template Cache
         */
        templateCache:{
            file:'templates.js',
            options:{
                module:'app.core',
                standAlone: false,
                root:'app/'
            }
        },
        /*
         * Browser Sync
         */
        browserReloadDelay:1000,
        /*
         * Bower and NPM locations
         */
        bower:{
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        /*
         * Node Settings
         */
        defaultPort: 7203,
        nodeServer:'./src/server/app.js'

    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};
