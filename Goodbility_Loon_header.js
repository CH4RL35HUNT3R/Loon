var modifiedHeaders = $request.headers;
var targetHeader = 'X-RevenueCat-ETag';
var lowerTarget = targetHeader.toLowerCase();
if (lowerTarget in modifiedHeaders) {
    modifiedHeaders[lowerTarget] = '';
    console.log('已清空: ' + targetHeader);
}
$done({ headers: modifiedHeaders });
