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
        var wikiUrl =  fixedEncodeURI(clickData.selectionText);
        console.log(wikiUrl);        
    };
});