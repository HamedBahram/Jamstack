module.exports = function (config) {
    config.addPassthroughCopy('src/public')
    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    }
}
