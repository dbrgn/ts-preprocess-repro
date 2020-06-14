const sveltePreprocess = require('svelte-preprocess');
const path = require('path');

module.exports = {
    entry: {
        main: ['./Main.svelte'],
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
        path: __dirname + '/out',
        filename: '[name].component.js',
        chunkFilename: '[name].component.[id].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        preprocess: sveltePreprocess({
                            typescript: {
                                compilerOptions: { strictNullChecks: true },
                            },
                        }),
                    }
                }
            }
        ]
    },
};
