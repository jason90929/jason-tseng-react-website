function getTwData() {
    return {
        about: {
            intro: '我是 <b>曾志豪</b>，超過兩年前端開發經驗，目前在台北任職網頁設計公司。',
            avatar: {
                src: 'assets/images/avatar.jpg',
                alt: 'Jason Tseng Avatar'
            },
            detail: [
                {
                    title: '能力概述',
                    intro: '',
                    items: [
                        '超過兩年的 HTML5, CSS3 and JavaScript 開發經驗',
                        '具備使用 RESTful API 的能力，如 Facebook API',
                        '能獨立完成 RWD 網頁與切版',
                        '瞭解 SEO 所需的 tag',
                        '有使用 AWS S3 和 EC2 的經驗，獨立架站的能力，你現在看到的個人網站就是 AWS EC2 + GoDaddy 完成的',
                        '具有使用過 AngularJS 1.x, React 的經驗，你現在看到的網頁是 React + Redux 架構寫的，<a href="sample/old-website/" target="_blank">舊網站</a>則是使用 Angular 1.x',
                        '使用 gulp、rowserify、scss、npm (或 bower 如果需要) 開發環境，加快開頭的開發建置提高工作效率'
                    ]
                },
                {
                    title: '人格特質',
                    intro: '',
                    items: [
                        '對於理解任何新東西的能力比一般人快許多的優勢',
                        '傾向於大方向來編寫程式',
                        '對於同一件事情可以投入長時間的專注力'
                    ]
                }
            ]
        },
        skills: {
            detail: [
                {
                    title: 'HTML5',
                    items: [
                        '具備 SEO 經驗，善用 HTML 5 的 tag',
                        '會用 meta tag，包含預覽 Facebook, Google 的 og:',
                        'Know how to have a better performance',
                    ]
                },
                {
                    title: 'CSS3',
                    items: [
                        '以使用 SCSS 開發為主',
                        '熟 RWD 開發流程，個人偏好由小尺寸開始',
                        '熟悉使用 after、before，知道某些「有這個就要加另一個」的 css',
                        '實作過 style 先後載入順序，以提高效能',
                        '魔鬼藏在細節裡，知道如何優化網頁或圖片效能、提升動畫順暢度的方法'
                    ]
                },
                {
                    title: 'JavaScript',
                    items: [
                        '使用 ES6 的環境開發',
                        '熟 jQuery，但傾向能用 Vanilla 解決就不使用 jQuery',
                        '有 React、AngularJS 1.x 的開發經驗'
                    ]
                },
                {
                    title: 'Others',
                    items: [
                        '以 gulp、rowserify、npm（或加上 bower）開發環境為主',
                        '使用 Git，用過 fork 和 merge',
                        '用 Evernote 紀錄一些步驟和指令，或是一些程式碼(程式碼陸續移到 codepen)'
                    ]
                }
            ]
        },
        portfolio: {
            detail: [
                {
                    title: '特效作品',
                    method: 'iframe',
                    items: [
                        {
                            name: 'Multi Layer Menu Without JS',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/BLROJN/?height=300&theme-id=0&default-tab=result&embed-version=2" ' +
                            'frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="http://codepen.io/jason90929/pen/BLROJN/">Multi Layer Menu Without JS</a>' +
                            ' by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>',
                            info: '純 CSS 實現多層 Menu'
                        },
                        {
                            name: 'Self Rotate Bubble',
                            html: '<iframe height="300" scrolling="no" src="//codepen.io/jason90929/embed/PGWvjE/?height=300&theme-id=0&default-tab=result&embed-version=2"' +
                            ' frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="https://codepen.io/jason90929/pen/PGWvjE/">Self Rotate Bubble</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>',
                            info: '自訂泡泡特效'
                        },
                        {
                            name: 'Flicker Text',
                            html: '<iframe height="300" scrolling="no" src="http://codepen.io/jason90929/embed/LRbBYd/?height=300&theme-id=0&default-tab=result&embed-version=2" ' +
                            'frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="http://codepen.io/jason90929/pen/LRbBYd/">Flicker Text</a>' +
                            ' by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>',
                            info: '破碎文字一個字一個字出現'
                        },
                        {
                            name: '簡繁轉換器',
                            html: '<iframe height="300" scrolling="no" src="http://codepen.io/jason90929/embed/YGNBEV/?height=300&theme-id=0&default-tab=result&embed-version=2"' +
                            ' frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="http://codepen.io/jason90929/pen/YGNBEV/">簡繁轉換器</a> ' +
                            'by Jason Tseng (<a href="http://codepen.io/jason90929">@jason90929</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>',
                            info: '簡繁字互轉，改編成不使用 jQuery 就能運作的方式'
                        }
                    ]
                },
                {
                    title: '網站作品',
                    items: [
                        {
                            name: 'tin-group',
                            src: 'assets/images/portfolio/tin-group.png',
                            info: '廷廷鋼琴團購',
                            status: '開發中',
                            detail: '使用技術：HTML5 + SCSS + JavaScript'
                        },
                        {
                            name: 'CNEWS',
                            src: 'assets/images/portfolio/cnews.png',
                            info: '匯流新聞網',
                            status: '開發中'
                        },
                        {
                            name: 'Home Integration',
                            src: 'assets/images/portfolio/home-integration.png',
                            info: '紘樂網站',
                            status: '等待上線'
                        },
                        {
                            name: 'Gopapala',
                            src: 'assets/images/portfolio/gopapala.png',
                            info: 'Gopapala',
                            status: '非公開'
                        },
                        {
                            name: 'ctop',
                            src: 'assets/images/portfolio/ctop.png',
                            info: 'ctop',
                            status: '開發終止'
                        },
                        {
                            name: 'Girlfie.',
                            src: 'assets/images/portfolio/girlfie.png',
                            url: 'http://girlfie.com.tw',
                            info: 'Girlfie.',
                            status: '已上線'
                        },
                        {
                            name: 'Delta',
                            src: 'assets/images/portfolio/delta-irs-system.png',
                            info: 'Delta',
                            status: '非公開'
                        },
                        {
                            name: 'MyWedding',
                            src: 'assets/images/portfolio/my-wedding.png',
                            info: '我的婚禮網站',
                            status: '等待上線'
                        },
                        {
                            name: '春天旅遊網站',
                            src: 'assets/images/portfolio/lotustourstpe.png',
                            url: 'http://www.lotustourstpe.tw/',
                            info: '春天旅遊網站',
                            status: '已上線'
                        },
                        {
                            name: 'URstage',
                            src: 'assets/images/portfolio/urstage.png',
                            url: 'http://www.urstage.com.tw/',
                            info: 'URstage',
                            status: '已上線'
                        },
                        {
                            name: '華江高中教科書系統',
                            src: 'assets/images/portfolio/hua-chiang-high-school.png',
                            url: 'http://203.72.56.75:8088/',
                            info: '華江高中教科書系統',
                            status: '已上線'
                        },
                        {
                            name: '愛台玩星級旅館',
                            src: 'assets/images/portfolio/itaiwanhotel.png',
                            url: 'https://play.google.com/store/apps/details?id=com.wethink.itaiwan.hotel&hl=zh_TW',
                            info: '愛台玩星級旅館',
                            status: '已上線'
                        },
                        {
                            name: '巍新軟體',
                            src: 'assets/images/portfolio/wethink.png',
                            url: 'http://www.wethink.com.tw/',
                            info: '巍新軟體',
                            status: '已上線'
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
}

function getEnData() {
    return {
        about: {
            intro: 'Hello, I\'m <b>Jason Tseng</b>. I have 2 years of experience in Front End Developer based in Taipei, Taiwan.',
            avatar: {
                src: 'assets/images/avatar.jpg',
                alt: 'Jason Tseng Avatar'
            },
            detail: [
                {
                    title: 'Summary',
                    items: [
                        'More than 2 years experience with HTML5, CSS3 and JavaScript',
                        'Have experience with RESTful API, such as Facebook, Google',
                        'Able to complete Responsive Web Design independently',
                        'Have experience with using framework like AngularJS 1.x, React',
                        'Know how to use gulp, browserify, scss, npm development environment, it makes me complete jobs faster'
                    ]
                },
                {
                    title: 'Personality',
                    intro: 'I have a book. ' +
                    'Hello, how are you? ' +
                    'I am fine, and you?'
                },
                {
                    title: 'Other',
                    intro: '<a href="sample/old-website/">Old website </a> Made with Angular 1.x'
                }
            ]
        },
        skills: {
            detail: [
                {
                    title: 'HTML5',
                    items: [
                        'Have SEO Experience',
                        'Have knowledge of og meta like Facebook, Google',
                        'Know how to have a better performance'
                    ]
                },
                {
                    title: 'CSS3',
                    items: [
                        'Know how to use ::after, ::before',
                        'Know how to deal with Responsive Web Design professional skills',
                        'Use SCSS to replace CSS'
                    ]
                },
                {
                    title: 'JavaScript',
                    items: [
                        'jQuery',
                        'React, Redux',
                        'AngularJS 1.x'
                    ]
                }
            ]
        },
        portfolio: [
            {
                name: 'Gopapala',
                src: 'assets/images/portfolio/gopapala.png',
                info: 'Gopapala（Private）\n'
            },
            {
                name: 'ctop',
                src: 'assets/images/portfolio/ctop.png',
                info: 'ctop（Private）\n'
            },
            {
                name: 'Girlfie.',
                src: 'assets/images/portfolio/girlfie.png',
                url: 'http://girlfie.com.tw',
                info: 'Girlfie.'
            },
            {
                name: 'Delta IRS System',
                src: 'assets/images/portfolio/delta-irs-system.png',
                info: 'Delta IRS System（Private）'
            },
            {
                name: 'MyWedding',
                src: 'assets/images/portfolio/my-wedding.png',
                info: 'MyWedding（Private）'
            },
            {
                name: 'Lotus Tours Taipei',
                src: 'assets/images/portfolio/lotustourstpe.png',
                url: 'http://www.lotustourstpe.tw/',
                info: 'Lotus Tours Taipei'
            },
            {
                name: 'URstage',
                src: 'assets/images/portfolio/urstage.png',
                url: 'http://www.urstage.com.tw/',
                info: 'URstage'
            },
            {
                name: 'Hua Chiang High School Book System',
                src: 'assets/images/portfolio/hua-chiang-high-school.png',
                url: 'http://203.72.56.75:8088/',
                info: 'Hua Chiang High School Book System'
            },
            {
                name: 'iTaiwan Hotel APP',
                src: 'assets/images/portfolio/itaiwanhotel.png',
                url: 'https://play.google.com/store/apps/details?id=com.wethink.itaiwan.hotel&hl=zh_TW',
                info: 'iTaiwan Hotel APP'
            },
            {
                name: 'WeThink Software',
                src: 'assets/images/portfolio/wethink.png',
                url: 'http://www.wethink.com.tw/',
                info: 'WeThink Software'
            }
        ],
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
        ]
    }
}

const data = (state = getTwData(), action) => {
    switch (action.type) {
        case 'GET_DATA':
            if (action.language === 'TW') {
                return getTwData();
            }
            else if (action.language === 'EN') {
                return getEnData();
            }
        default:
            return state;
    }
};

export default data;