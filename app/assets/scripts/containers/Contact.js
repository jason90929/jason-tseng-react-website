import React, { PropTypes } from 'react';
import { Button } from 'react-mdl';

const Contact = ({ data }) => (
  <div>
    <figure className="banner _01">
    </figure>

    <div className="bg-theme-color">
      <article className="article">
        <h2>Contact</h2>

        <nav className="contact-list-wrapper">
          <ul>
            {data.map(item =>
              <li>
                <a href={item.url} target={item._blank ? '_blank' : ''} rel="noopener">
                  <Button ripple className="mdl-btn-custom">
                    <i className={'fa ' + item.icon} />
                    {item.name}
                  </Button>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </article>
    </div>
  </div>
);


Contact.propTypes = {
  data: PropTypes.object.isRequired
};

export default Contact;