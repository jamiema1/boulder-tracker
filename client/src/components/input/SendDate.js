import React, { forwardRef } from 'react'

export default forwardRef(
  function SendDate(props, ref) {
    return (
      <div id="sendDate">
        <label className='title'>Send Date: </label>
        <input type='text' ref={ref.current.sendDateRef}></input>
      </div>
    )
  })

