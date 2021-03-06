import React, { Component, PropTypes } from 'react';
import { Button } from 'react-mdl';
import { connect } from 'react-redux';
import { setLanguage, getData } from '../actions';

const getLanguageButtonName = (language) => {
  switch (language) {
    case 'EN':
      return 'TW';
    case 'TW':
    default:
      return 'EN';
  }
};

/**
 * @return {boolean}
 * @return {boolean}
 */
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ''
    };
  }

  componentDidMount() {
    let language;
    switch (getLanguageButtonName(this.props.language)) {
      case 'TW':
        language = '中';
        break;
      case 'EN':
      default:
        language = 'EN';
    }
    this.setState({
      language: language
    });
  }

  onChangeLanguageButtonName() {
    let language;
    switch (this.props.language) {
      case 'TW':
        language = '中';
        break;
      case 'EN':
      default:
        language = 'EN';
    }
    this.setState({
      language: language
    });
  }

  render() {
    if (this.props.content === 'content') {
      return (
        <footer className="footer has-content">
          <div className="icon-wrapper">
            <div className="summary">
              © 2016 <i>Jason Tseng</i>
            </div>
          </div>

          <div className="language-pos">
            <a href="javascript:;"
               onTouchEnd={e => {
                 e.preventDefault();
                 this.onChangeLanguageButtonName(); // 把 TW 兩字顯示成 中
                 this.props.onSwitchLanguage(getLanguageButtonName(this.props.language));
               }}
               onClick={e => {
                 e.preventDefault();
                 this.onChangeLanguageButtonName(); // 把 TW 兩字顯示成 中
                 this.props.onSwitchLanguage(getLanguageButtonName(this.props.language));
               }}
            >
              <Button ripple className="mdl-icon-custom">
                {this.state.language}
              </Button>
            </a>
          </div>

          <div className="banner _02 bot"></div>
        </footer>
      );
    }
    else if (this.props.content === 'contact') {
      // do nothing
      return false;
    }

    return (
      <footer className="footer">
        <div className="icon-wrapper">
          <a href="javascript:;"
             onTouchEnd={e => {
               e.preventDefault();
               this.onChangeLanguageButtonName(); // 把 TW 兩字顯示成 中
               this.props.onSwitchLanguage(getLanguageButtonName(this.props.language));
             }}
             onClick={e => {
               e.preventDefault();
               this.onChangeLanguageButtonName(); // 把 TW 兩字顯示成 中
               this.props.onSwitchLanguage(getLanguageButtonName(this.props.language));
             }}
          >
            <Button ripple className="mdl-icon-custom">
              {this.state.language}
            </Button>
          </a>

          {this.props.data.map(item =>
            <a href={item.url} target={item._blank ? '_blank' : ''} rel="noopener">
              <Button ripple className="mdl-icon-custom">
                <i className={'fa ' + item.icon} />
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
  }
}

const getContent = (content) => {
  switch (content) {
    case 'about':
    case 'skills':
    case 'portfolio':
      return 'content';
    case 'contact':
      return 'contact';
    default:
      return 'home';
  }
};

const mapStateToProps = (state) => {
  return {
    content: getContent(state.content),
    data: state.data.contact,
    language: state.language
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSwitchLanguage: (language) => {
      dispatch(setLanguage(language));
      dispatch(getData(language));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);