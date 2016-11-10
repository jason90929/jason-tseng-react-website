import twData from './data-chinese';
import enData from './data-english';

module.exports = function (language) {
    var data;
    switch (language) {
        case 'EN':
            data = enData;
            break;
        case 'TW':
        default:
            data = twData;
            break;
    }

    return {
        about: {
            intro: data.intro,
            avatar: {
                src: 'assets/images/avatar.jpg',
                alt: 'Jason Tseng Avatar'
            },
            detail: [
                {
                    title: data.ability,
                    items: data.abilityItems
                },
                {
                    title: data.personality,
                    items: data.personalityItems
                }
            ]
        },
        skills: {
            detail: [
                {
                    title: 'HTML5',
                    items: data.HTML5Items
                },
                {
                    title: 'CSS3',
                    items: data.CSS3Items
                },
                {
                    title: 'JavaScript',
                    items: data.JavaScriptItems
                },
                {
                    title: 'Others',
                    items: data.skillsOtherItems
                }
            ]
        },
        portfolio: {
            detail: [
                {
                    title: data.codepenTitle,
                    method: 'iframe',
                    items: [
                        {
                            name: 'Scroll down then element brush in',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/jVbbRm/?height=300&theme-id=0&default-tab=result&embed-version=2" ' +
                            'frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="https://codepen.io/jason90929/pen/jVbbRm/">Scroll down then element brush in</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>'
                        },
                        // {
                        //     name: 'A-Frame VR - Mobile Phone',
                        //     html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/WobKew/?height=300&theme-id=0&default-tab=result&embed-version=2" ' +
                        //     'frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="https://codepen.io/jason90929/pen/WobKew/">A-Frame VR - Mobile Phone</a> ' +
                        //     'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>'
                        // },
                        {
                            name: 'Text Highlight Multi-Line',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/YpzQaw/?height=300&theme-id=0&default-tab=result&embed-version=2" ' +
                            'frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="http://codepen.io/jason90929/pen/YpzQaw/">Text Highlight Multi-Line</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>'
                        },
                        {
                            name: 'Switcher',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/MbgzNR/?height=300&theme-id=0&default-tab=result&embed-version=2" ' +
                            'frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="http://codepen.io/jason90929/pen/MbgzNR/">Switcher</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>'
                        },
                        {
                            name: 'Multi Layer Menu With Pure CSS',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/BLROJN/?height=300&theme-id=0&default-tab=result&embed-version=2" ' +
                            'frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="https://codepen.io/jason90929/pen/BLROJN/">Multi Layer Menu Without JS</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>'
                        },
                        {
                            name: 'Self Rotate Bubble',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/PGWvjE/?height=300&theme-id=0&default-tab=result&embed-version=2"' +
                            ' frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="https://codepen.io/jason90929/pen/PGWvjE/">Self Rotate Bubble</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>'
                        },
                        {
                            name: 'Flicker Text',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/LRbBYd/?height=300&theme-id=0&default-tab=result&embed-version=2" ' +
                            'frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="https://codepen.io/jason90929/pen/LRbBYd/">Flicker Text</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>'
                        },
                        {
                            name: '簡繁轉換器',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/YGNBEV/?height=300&theme-id=0&default-tab=result&embed-version=2"' +
                            ' frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="https://codepen.io/jason90929/pen/YGNBEV/">簡繁轉換器</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>'
                        }
                    ]
                },
                {
                    title: data.websiteTitle,
                    items: [
                        {
                            name: 'nong-design',
                            info: data.nongDesignTitle,
                            src: 'assets/images/portfolio/nong-design.png',
                            status: data.inDevelopment,
                            detail: '使用技術：HTML5 + SCSS + JavaScript'
                        },
                        {
                            name: 'tin-group',
                            info: data.tinGroupTitle,
                            src: 'assets/images/portfolio/tin-group.png',
                            status: data.inDevelopment,
                            detail: '使用技術：HTML5 + SCSS + JavaScript'
                        },
                        {
                            name: 'CNEWS',
                            info: data.cnewsTitle,
                            src: 'assets/images/portfolio/cnews.png',
                            url: 'https://cnews.com.tw',
                            status: data.online
                        },
                        {
                            name: 'Home Integration',
                            info: data.homeIntegration,
                            src: 'assets/images/portfolio/home-integration.png',
                            url: 'http://home-i.com.tw',
                            status: data.online
                        },
                        {
                            name: 'Gopapala',
                            info: data.gopapalaTitle,
                            src: 'assets/images/portfolio/gopapala.png',
                            status: data.private
                        },
                        {
                            name: 'ctop',
                            info: data.ctopTitle,
                            src: 'assets/images/portfolio/ctop.png',
                            status: data.terminated
                        },
                        {
                            name: 'Girlfie.',
                            info: data.gitlfieTitle,
                            src: 'assets/images/portfolio/girlfie.png',
                            url: 'http://girlfie.com.tw',
                            status: data.online
                        },
                        {
                            name: 'Delta',
                            info: data.deltaTitle,
                            src: 'assets/images/portfolio/delta-irs-system.png',
                            status: data.private
                        },
                        {
                            name: 'MyWedding',
                            info: data.myWeddingTitle,
                            src: 'assets/images/portfolio/my-wedding.png',
                            status: data.inDevelopment
                        },
                        {
                            name: 'LotusToursTaipei',
                            info: data.lotusToursTaipeiTitle,
                            src: 'assets/images/portfolio/lotustourstpe.png',
                            url: 'http://www.lotustourstpe.tw/',
                            status: data.online
                        },
                        {
                            name: 'URstage',
                            info: data.urStageTitle,
                            src: 'assets/images/portfolio/urstage.png',
                            url: 'http://www.urstage.com.tw/',
                            status: data.online
                        },
                        {
                            name: 'HuaChiangBookSystem',
                            info: data.huaChiangBookSystemTitle,
                            src: 'assets/images/portfolio/hua-chiang-high-school.png',
                            url: 'http://203.72.56.75:8088/',
                            status: data.online
                        },
                        {
                            name: 'iTaiwanHotel',
                            info: data.iTaiwanHotelTitle,
                            src: 'assets/images/portfolio/itaiwanhotel.png',
                            url: 'https://play.google.com/store/apps/details?id=com.wethink.itaiwan.hotel&hl=zh_TW',
                            status: data.online
                        },
                        {
                            name: 'WeThinkSoftware',
                            info: data.weThinkSoftwareTitle,
                            src: 'assets/images/portfolio/wethink.png',
                            url: 'http://www.wethink.com.tw/',
                            status: data.online
                        }
                    ]
                }
            ]
        },
        contact: [
            {
                name: 'Taiwan, Taipei',
                url: 'https://www.google.com.tw/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0204976,121.5132003,14z/data=!4m5!3m4!1s0x3442ac6b61dbbd8b:0xbcd1baad5c06a482!8m2!3d25.0329636!4d121.5654268',
                _blank: true,
                icon: 'fa-location-arrow'
            },
            {
                name: '0988-300764',
                url: 'tel:+886988300764',
                icon: 'fa-phone'
            },
            {
                name: 'tsaistorm@gmail.com',
                url: 'mailto:tsaistorm@gmail.com',
                icon: 'fa-envelope-o'
            },
            {
                name: 'https://www.facebook.com/jason90929',
                url: 'https://www.facebook.com/jason90929',
                _blank: true,
                icon: 'fa-facebook'
            },
            {
                name: 'https://github.com/jason90929',
                url: 'https://github.com/jason90929',
                _blank: true,
                icon: 'fa-github'
            },
            {
                name: 'https://codepen.io/jason90929/',
                url: 'https://codepen.io/jason90929/',
                _blank: true,
                icon: 'fa-codepen'
            }
        ]
    }
};