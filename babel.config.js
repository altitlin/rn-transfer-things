module.exports =  ({ cache }) => {
  cache(true)

  return {
    presets: ['babel-preset-expo'],
  }
}
