import { debounce, each, $, $1 } from './utils.js'

const Application = (() => {

  const init = () => {
    console.log('Hello World!')
  }

  return {
    init: init
  }

})()

export default Application