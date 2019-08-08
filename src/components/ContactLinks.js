import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="mailto:singh.rohanvivek@gmail.com"
          >
            singh.rohanvivek@gmail.com
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/rohanvivek/"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/rohanvivek"
          >
            github
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/singh.rohanvivek"
          >
            facebook
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
