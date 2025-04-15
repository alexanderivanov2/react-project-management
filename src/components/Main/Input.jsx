import React from 'react'

function Input({ textarea, children, ...props}) {
  return (
    <fieldset>
        { children }
        { textarea ? <textarea {...props} /> : <input {...props}/>}
    </fieldset>
  )
}

export default Input