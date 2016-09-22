import React, {PropTypes} from 'react';

const Skills = ({data}) => (
    <div>
        <figure className="banner _01">
        </figure>

        <div className="bg-theme-color">
            <article className="article">
                <h2>Skills</h2>

                {data.detail.map(item =>
                    <div>
                        <h3>
                            {item.title}
                        </h3>
                        <ol>
                            {item.items.map(text =>
                                <li>
                                    {text}
                                </li>
                            )}
                        </ol>
                    </div>
                )}
            </article>
        </div>
    </div>
);

Skills.propTypes = {
    data: PropTypes.object.isRequired
};

export default Skills;