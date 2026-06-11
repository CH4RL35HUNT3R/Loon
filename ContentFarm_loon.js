// ContentFarm 屏蔽 - Loon 响应脚本
// 还原自 limbopro.com
// 功能：在 Google 搜索页面注入 CSS 和 JS 屏蔽内容农场

let regex_head = '<head>';
let Style = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/contentFarm.css">';
let regex_body = '</body>';
let JavaScript = '<script async="async" src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';
let body = $response.body
.replace(regex_head, Style)
.replace(regex_body, JavaScript);
$done({body});
