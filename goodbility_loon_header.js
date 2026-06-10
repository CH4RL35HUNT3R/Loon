// Goodbility 解锁 - Loon 请求头处理脚本
// 删除可能导致验证失败的请求头，配合响应脚本使用

let headers = $request.headers;

// 删除常见的防篡改/验证头
const headersToDelete = [
  'x-revenuecat-signature',
  'x-revenuecat-etag',
  'x-platform-info',
  'x-client-version',
  'x-rc-request-id',
  'authorization'
];

headersToDelete.forEach(h => {
  if (headers[h]) {
    delete headers[h];
    console.log('已删除请求头: ' + h);
  }
});

// 伪造 User-Agent 为最新 iOS 设备
headers['User-Agent'] = 'RevenueCat/4.0.0 (iOS 17.0; iPhone15,2)';

console.log('Goodbility 请求头处理完成');
$done({ headers: headers });
