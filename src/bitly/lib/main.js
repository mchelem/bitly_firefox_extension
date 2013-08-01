var urlbarButton = require('urlbarbutton').UrlbarButton;
var button;
var data = require("sdk/self").data;

exports.main = function () {
  
  function save_bitmark(href, event){
    var tabs = require("sdk/tabs");
    
    tabs.activeTab.attach({
        contentScriptFile: data.url("bitmarklet.js")
    });  
  }

  button = urlbarButton({
    id : 'bitly-button',
    image : data.url("bitly_fish_16.png"),
    onClick : save_bitmark
  });
  
  button.setVisibility(true);  
};

exports.onUnload = function (reason) {
  if (reason !== 'shutdown') {
    button.remove();
  }
};