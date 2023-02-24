import { useState, forwardRef, useImperativeHandle, } from 'react'
import PropTypes from 'prop-types'

const Toggleable = forwardRef( (props, refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.view}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>{props.hide}</button>
      </div>
    </div>
  )
});

Toggleable.propTypes = {
  view: PropTypes.string.isRequired,
  hide: PropTypes.string.isRequired
}

export default Toggleable