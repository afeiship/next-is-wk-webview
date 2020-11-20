/*!
 * name: @jswork/next-is-wk-webview
 * description: Detect if is wkwebview.
 * homepage: https://github.com/afeiship/next-is-wk-webview
 * version: 1.0.0
 * date: 2020-11-20 17:17:49
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
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
