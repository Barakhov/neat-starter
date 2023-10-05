barba.init({
  transitions: [
    {
      name: 'default-transition',
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
