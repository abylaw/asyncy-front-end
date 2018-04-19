import React from 'react'

const EmailForm = ({ placeholder, inputStyle, btnText, btnStyle }) => (
  <form className='pageclip-form' action='https://send.pageclip.co/kPrlBqjZJ6s7Fjj4yU1GLwTjIUwQZYwj' method='post' style={{
    marginBottom: 0,
  }}>
    <div className='columns is-variable is-1' style={{
      marginBottom: 0,
    }}>
      <div className='column' style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}>
        <input type='email' name='email' placeholder={ placeholder || 'Email address'} css={{
          width: '100%',
        }} style={inputStyle || {}} required/>
      </div>
      <div className='column is-one-third' style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}>
        <button type='submit' style={btnStyle || {}} css={{
          width: '100%'
        }} className='primary button pageclip-form__submit'>
          <span>{ btnText || 'Get notified' }</span>
        </button>
      </div>
    </div>
    <div className='pageclip-message' style={{ height: '1em' }}></div>
  </form>
)

export default EmailForm