var menuItem = {
    "id": "wikiId",
    "title": "WikiSearch",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "wikiId" && clickData.selectionText){
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": 1200,
            "height": 500
        };
        chrome.windows.create(createData, function(){});
        chrome.tts.speak(clickData.selectionText, {'rate': 0.7});
             
    };
});