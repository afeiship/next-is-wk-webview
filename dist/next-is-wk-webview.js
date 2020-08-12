/*!
 * name: @feizheng/next-is-wk-webview
 * description: Detect if is wkwebview.
 * homepage: https://github.com/afeiship/next-is-wk-webview
 * version: 1.0.0
 * date: 2020-08-12T02:39:19.397Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
  var isWKWebView = false;
  if (global.webkit && global.webkit.messageHandlers) {
    isWKWebView = true;
  }

  nx.isWkWebview = function () {
    return iOS && isWKWebView;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isWkWebview;
  }
})();
