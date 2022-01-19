const env = require('./env-config.js');

module.exports = {
    babelrc: false,
    plugins: [
        ['emotion', { autoLabel: true, sourceMap: true }],
        'inline-react-svg',
        ['transform-define', env],
        ['lodash'],
    ],
    env: {
        development: {
            presets: ['next/babel'],
        },
        production: {
            presets: ['next/babel', ['@babel/env', { targets: { node: '8' } }]],
            plugins: [['emotion', { autoLabel: true, sourceMap: false }]],
        },
        test: {
            presets: [
                ['next/babel', { 'preset-env': { modules: 'commonjs' } }],
            ],
        },
    },
};
