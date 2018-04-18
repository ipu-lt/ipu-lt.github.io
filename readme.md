
# Frontend

`ipu-lt.github.io` にデプロイ. (Staticなウェブサイト)  
デザインとレイアウトについては既存のリソース ([HOMEY-TOUHOKU/homey-touhoku.github.io](HOMEY-TOUHOKU/homey-touhoku.github.io)) などを活用して構成.  
バックエンドとしてFirebaseを活用.   
  
## 技術
* HTML5
* CSS3
  * bootstrap4
* js
  * Firebase SDK

# BackEnd

データベースやGoogleログイン, ファイル保存は Firebase を利用.

## 技術
* Firebase
  * Realtime Database
  * Authentification
  * Storage



## DB構造 (Firebase RDB)
```json

{
  "events": [
  {
    "event_id1": {
      "title": "2018年5月LT 開催のお知らせ",
      "content": "本文",
      "event_date": 20180518",
      "presenters": [
        "user_id1": true
      ],
      "organizer": "user_id1"
    }
  ],
  "users": {
    // userのjson object
  },


}

```
