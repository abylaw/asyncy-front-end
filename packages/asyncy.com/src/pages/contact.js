import React from 'react'
import Hero from '../components/Hero'

const data = {
  'title': 'Contact Us',
  'subtitle': 'Get in touch and let us know how we can help.',
  'contacts': [
    {
      title: 'Sales',
      description: `We'd love to talk about how we can work together.`,
      linkText: 'Contact Sales',
      link: '/',
    },
    {
      title: 'Help & Support',
      description: `We're here to help with any questions or concerns.`,
      linkText: 'Contact Support',
      link: '/',
    },
    {
      title: 'Media & Press',
      description: `Get asyncy news, company info, and media resources.`,
      linkText: 'Contact Press',
      link: '/',
    },
  ],
}

const ContactPage = () => (
  <div>
    <Hero title={data.title} subtitle={data.subtitle}></Hero>

    <section className='section' style={{
      maxWidth: '900px',
    }}>
      <div className='columns'>
      {
        data.contacts.map((contact, index) => (
          <div className='column' key={index}>
            <div style={{
              backgroundColor: '#262626',
              borderRadius: '4px',
              padding: '40px 34px 24px 34px',
              fontSize: '0.9em',
            }}>
              <div style={{
                textAlign: 'center',
                paddingBottom: '0.7em',
              }}>
                <h4>{contact.title}</h4>
              </div>
              <p>{contact.description}</p>
              <a onClick={() => window.typeform.contact.open()}>
                <button className='secondary' style={{
                  marginTop: '1em',
                  width: '100%',
                  fontSize: '1em',
                }}>
                  {contact.linkText}
                </button>
              </a>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  </div>
)

export default ContactPage
