const React = require('react')
const ReactDOM = require('react-dom')

const data = { name: 'humans' }

function helloTemplate (props) {
  return (
    <div>
      
    </div>
  )
}

const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
