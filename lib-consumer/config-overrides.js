const webpack = require('webpack');

module.exports = function override(config, env) {
    console.log("React app rewired works!")
    config.resolve.fallback = {
        assert: require.resolve("assert/"),
        util: require.resolve("util/"),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        stream: require.resolve('stream-browserify'),
        tty: require.resolve("tty-browserify"),
        os: require.resolve("os-browserify/browser"),
        zlib: require.resolve("browserify-zlib"),
        path: require.resolve("path-browserify")
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}