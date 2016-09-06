import React, {PropTypes} from 'react';

const About = ({data}) => (
    <div>
        <figure className="banner _01">
        </figure>

        <div className="bg-theme-color">
            <article className="article">
                <h2>About</h2>

                <figure className="avatar">
                    <img src={data.avatar.src} alt={data.avatar.alt} />
                </figure>


                <p dangerouslySetInnerHTML={{__html: data.intro}}>

                </p>

                {data.details.map(item =>
                    <div>
                        <h3>
                            {item.title}
                        </h3>

                        { item.intro ?
                            <p dangerouslySetInnerHTML={{__html: item.intro}}>

                            </p>
                            :
                            false
                        }

                        { item.items ?
                            <ol>
                                {item.items.map(text =>
                                    <li>
                                        {text}
                                    </li>
                                )}
                            </ol>
                            :
                            false
                        }
                    </div>
                )}

                <br className="clear"/>
            </article>
        </div>
    </div>
);

About.propTypes = {
    data: PropTypes.object.isRequired
};

export default About;