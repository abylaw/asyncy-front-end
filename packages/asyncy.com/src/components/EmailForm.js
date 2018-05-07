import React from 'react'

const EmailForm = ({ placeholder, inputStyle, btnText, btnStyle }) => (
  <form className='pageclip-form-custom' action='https://send.pageclip.co/kPrlBqjZJ6s7Fjj4yU1GLwTjIUwQZYwj' method='post' css={{
    marginBottom: '16px',
    '&.error input': {
      borderColor: '#F74545',
    },
    '&.success input': {
      borderColor: '#3EC28F',
    },
    '&.success button': {
      color: '#3EC28F !important'
    }
  }}>
    <div className='columns is-variable is-1' style={{
      marginBottom: 0,
    }}>
      <div className='column' style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}>
        <input name='email' placeholder={ placeholder || 'Email address'} css={{
          width: '100%',
        }} style={inputStyle || {}}/>
        <div className='error-message' style={{
          color: '#F74545',
          textAlign: 'left',
          fontSize: '0.8em',
        }}></div>
      </div>
      <div className='column is-narrow' style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}>
        <button type='submit' name='submit' style={btnStyle || {}} css={{
          width: '150px'
        }} className='primary button pageclip-form__submit pageclip-form__submit--dark-loader'>
          <span>{ btnText || 'Get notified' }</span>
        </button>
      </div>
    </div>
  </form>
)

export default EmailForm