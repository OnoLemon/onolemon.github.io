if(!self.define){let i,e={};const c=(c,n)=>(c=new URL(c+".js",n).href,e[c]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=c,i.onload=e,document.head.appendChild(i)}else i=c,importScripts(c),e()})).then((()=>{let i=e[c];if(!i)throw new Error(`Module ${c} didn’t register its module`);return i})));self.define=(n,s)=>{const a=i||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let o={};const d=i=>c(i,a),r={module:{uri:a},exports:o,require:d};e[a]=Promise.all(n.map((i=>r[i]||d(i)))).then((i=>(s(...i),o)))}}define(["./workbox-afb8f5db"],(function(i){"use strict";self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"404.html",revision:"cb37d00d9aec9f2aa8b63835a7ce9e18"},{url:"about/index.html",revision:"241b447705969a13f6adc03a1fc26e52"},{url:"air-conditioner/index.html",revision:"dfa5397beca1004c176e63d2a54809fc"},{url:"album/index.html",revision:"f8f4744c75b674414fddef32a8558643"},{url:"anzhiyu/random.js",revision:"0e6d543a0896295f181021b00d21aef9"},{url:"archives/2023/06/index.html",revision:"9893716abb15c01c71a8693c108963dd"},{url:"archives/2023/index.html",revision:"ce7f5e2bbb334321516f150929c41a33"},{url:"archives/index.html",revision:"23b8e9caa30246ceded4dd59834afe39"},{url:"bangumis/index.html",revision:"1e53b1982e751a16132b7c74e1e19766"},{url:"categories/Game/index.html",revision:"d29d5cdea68be50ada316c61b8f36737"},{url:"categories/index.html",revision:"97be98d5f25ac995efabad94ff745548"},{url:"categories/后端开发/index.html",revision:"ccd8e7f07daad2c8ddfe7c779ab41e0b"},{url:"categories/生活日常/index.html",revision:"c4dfd2e4bd6629979884fe04ea1607b3"},{url:"cinemas/index.html",revision:"5028548bb0499d1e9fd6b1e74204cc4e"},{url:"comments/index.html",revision:"0430c6d5b2e710d999608b2232ea2967"},{url:"css/index.css",revision:"6d32d995602f10755f2bdbfa9be67155"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"97254efcb960f97a84bc91cbcc2a3f32"},{url:"essay/index.html",revision:"c65cb56a85117e5a1278db82d1f8c790"},{url:"fcircle/index.html",revision:"51d1d5e999782d705c0852163d5dc1cf"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.png",revision:"d8499ef17be10a92728a69f02f2cf947"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"e692372c5042285f19f1dafcfbce2dd6"},{url:"img/siteicon/144.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/144a.png",revision:"11720d7a2dc84f1cad3116b70d129831"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/192.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/192a.png",revision:"bb7a5ef1d26476b312e0a1d0ce2e275b"},{url:"img/siteicon/256.png",revision:"489d94aa6ac54a8a191d9242b42ad704"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/48.png",revision:"18d620a799194d49c3cbb84da1a13474"},{url:"img/siteicon/512.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/64.png",revision:"b555cec0f98a9371a14ca48f3f17c626"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-touch-icon.png",revision:"089070f3f7a53762241748046c58f72c"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/siteicon/splashIcons/icon_1125x2436.png",revision:"b2f890d6b9fa042e9152585e17041e3f"},{url:"img/siteicon/splashIcons/icon_1136x640.png",revision:"671649cd535adfc4553411ca7a61b374"},{url:"img/siteicon/splashIcons/icon_1242x2208.png",revision:"eb5d45c9c5256b1f1fca13bec104b623"},{url:"img/siteicon/splashIcons/icon_1242x2688.png",revision:"604d3163e9277de0a352c0c7c185daeb"},{url:"img/siteicon/splashIcons/icon_1334x750.png",revision:"c0221818c38df6cc9480dcfb62dc96b1"},{url:"img/siteicon/splashIcons/icon_1536x2048.png",revision:"b4f17174bd61f4ac3d4dcaa42f3f444f"},{url:"img/siteicon/splashIcons/icon_1668x2224.png",revision:"97c4041d4e0e3c1fa1f677fbaf9011c3"},{url:"img/siteicon/splashIcons/icon_1668x2388.png",revision:"37c6c01618a42d1a3531724b5c38e2a3"},{url:"img/siteicon/splashIcons/icon_1792x828.png",revision:"bbb4168d1f66f974bbfdbb3f99fe4965"},{url:"img/siteicon/splashIcons/icon_2048x1536.png",revision:"5338f20ffa4939c21408ae286562fd1e"},{url:"img/siteicon/splashIcons/icon_2048x2732.png",revision:"707236819aee3816a27fb8898f09d9b9"},{url:"img/siteicon/splashIcons/icon_2208x1242.png",revision:"462945f6ef09e0a3188ddf14720762d6"},{url:"img/siteicon/splashIcons/icon_2224x1668.png",revision:"31f54cdd65a9bff95ce23cb8a3a506f7"},{url:"img/siteicon/splashIcons/icon_2388x1668.png",revision:"357fbba8fcba969b00334fbcc080c25b"},{url:"img/siteicon/splashIcons/icon_2436x1125.png",revision:"42697a2988bbc4cd36bd8ebfe082a335"},{url:"img/siteicon/splashIcons/icon_2688x1242.png",revision:"7ce3bd96e8933de6242ac212648cfa13"},{url:"img/siteicon/splashIcons/icon_2732x2048.png",revision:"f87f22a489511d9346b2696d1afc7050"},{url:"img/siteicon/splashIcons/icon_640x1136.png",revision:"441c175c92c4e99206d5f930882deb0a"},{url:"img/siteicon/splashIcons/icon_750x1334.png",revision:"b70cc0c5557f6451ea7fa494233373cc"},{url:"img/siteicon/splashIcons/icon_828x1792.png",revision:"c1305b7f1b6d0cb161e5d5c0dff1a520"},{url:"index.html",revision:"ea2290b648084790d4b60a0ae62296cc"},{url:"js/main.js",revision:"e530dfa5834afd77b8dcbb07c38bc45e"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"6d27ae3cf834050e2b8c3a3c0bd4573d"},{url:"link/index.html",revision:"88cb296e128ca6d9cc864b500d42cab6"},{url:"music/index.html",revision:"d055e72a4ec24de4728a4706fbceda37"},{url:"posts/3eeb.html",revision:"d300f7169b65a69f3c881df6052a873a"},{url:"tags/index.html",revision:"5658badb6df01dfa4b6d9a68238a1447"},{url:"wordScenery/index.html",revision:"b5c7156a2c3845a4cd4529cc2844704c"}],{})}));
//# sourceMappingURL=service-worker.js.map
