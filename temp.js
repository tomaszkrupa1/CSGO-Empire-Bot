{
    "manifest_version": 2.0,
    "name": "Csgo Betting Bot",
    "version": "0.1",
    "description"; "Automatic csgo betting bot",
    "icons": { 
        "16": "imgs/img1.png",
        "48": "imgs/img1.png",
       "128": "imgs/img1.png" 
      },
    "content_scripts": [
      {
        "matches": ["https://csgoempire.com/"],
        "css": ["style.css"]
      }
    ],
    "background": {
      "persistent": true,
      "scripts": ["js/background.js"]
    },
    "permissions": [
      "contextMenus",
      "activeTab"
    ]
}

