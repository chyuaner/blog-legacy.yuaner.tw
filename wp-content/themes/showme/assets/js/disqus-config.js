function loadDisqusConfig(pageUrl, pageId) {
  window.disqus_config = function () {
    this.page.url = pageUrl;
    this.page.identifier = pageId;
  };
}
