import React, {Component} from 'react';
import {Button} from 'react-mdl';

/**
 * @return {boolean}
 * @return {boolean}
 */
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            draw: ''
        };
    }

    doDrawLine() {
        this.setState({
            draw: 'active'
        });

        setTimeout(() => {
            this.setState({
                draw: ''
            });
        }, 3000);
    }

    render() {
        if (this.props.content === 'CONTENT') {
            return (
                <footer className="footer has-content">
                    <div className="icon-wrapper">
                        <div className="summary">
                            © 2016 <i>Jason Tseng</i>
                        </div>
                    </div>

                    <div className="banner _02 bot"></div>
                </footer>
            );
        }
        else if (this.props.content === 'CONTACT') {
            // do nothing
            return false;
        }

        return (
            <footer className="footer">
                <div className="icon-wrapper">
                    {/*<a href="javascript:;" onClick={this.doDrawLine.bind(this)}>*/}
                        {/*<Button ripple className="mdl-icon-custom">*/}
                            {/*<i className="fa fa-signal"/>*/}
                        {/*</Button>*/}
                    {/*</a>*/}

                    {this.props.data.map(item =>
                    <a href={item.url} target={item._blank ? '_blank' : ''}>
                    <Button ripple className="mdl-icon-custom">
                    <i className={'fa ' + item.icon}/>
                    </Button>
                    </a>
                    )}
                </div>

                {/*<svg id="drawLine" className={this.state.draw} xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     preserveAspectRatio="xMidYMid">
                    <path d="M15.000,-1200.000 L15.000,1200.000 Z"/>
                    <path d="M45.000,-1200.000 L45.000,1200.000 Z"/>
                    <path d="M75.000,-1200.000 L75.000,1200.000 Z"/>
                    <path d="M105.000,-1200.000 L105.000,1200.000 Z"/>
                </svg>*/}
            </footer>
        )
    };
}

export default Footer;