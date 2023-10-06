barba.use(barbaCss)

barba.init({
  transitions: [
    {
      leave() {
        // create your stunning leave animation here
        console.log('adios')
      },
      enter() {
        // create your amazing enter animation here
        console.log('hola')
      }
    }
  ]
})
