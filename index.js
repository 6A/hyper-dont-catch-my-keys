'use strict'

let uncaughtKeys = ''

exports.reduceUI = (state, action) => {
  if (action.type === 'CONFIG_LOAD' || action.type === 'CONFIG_RELOAD') {
    uncaughtKeys = action.config.uncaughtKeys || ''
  }

  return state
}

exports.decorateTerm = (Term, { React }) => class extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.onDecorated = this.onDecorated.bind(this)
    this.render      = this.render.bind(this)
  }

  onDecorated(t) {
    if (this.props && this.props.onDecorated)
      this.props.onDecorated(t)
    
    t.term.attachCustomKeyEventHandler(e => {
      if (uncaughtKeys.indexOf(e.key) === -1)
        return

      t.term.send(e.key)
    })
  }

  render() {
    return React.createElement(Term, Object.assign({}, this.props, {
      onDecorated: this.onDecorated
    }))
  }
}
