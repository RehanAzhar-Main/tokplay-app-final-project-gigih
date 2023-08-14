# TokPlay

2 fitur Halaman yang dikembangkan :
 - Home
    Detail fitur : List video
 - Video Detail 
    Detail fitur : Product List, Comment List, and Submit Comment


## Database Structure
- Database Name : TokopediaVideo
- Port : 27017
- 3 collections:
    - videos 
        - id : ObjectId
        - title : String
        - account_name : String
        - img_url : String
    - products 
        - _id : ObjectId
        - video_id:ObjectId
        - title : String
        - price : Int32
        - product_url : String 
        - img_url : String
    - comments
        - _id : ObjectId
        - video_id : ObjectId
        - comment : String
        - username : String
        - created_at : Date


## Architecture
Terdapat 3 Layer yang diterapkan pada repository ini, diantaranya adalah :
- Controller/Handler Layer
    Merupakan penghubung antara klien dengan server dari aplikasi. Terutama juga unuk memfasilitasi data dan mengkoordinasikan aksi yang akan diambil
- Service Layer (Bussines logic)
    Tujuan dari layer ini adalah untuk mengimplementasikan spesifik operasi dan alur dari kebutuhan aplikasi seperti implementasi alur bisnis, pemrosesan data, interaksi dengan later data, dll.
- Data Access Layer
    adalah komponen yang berinteraksi dengan database seperti pengambilan data, memanipulasi data, mengkoneksikan database, memetakan data, dan melakukan alur transaksi

## List API request and response
### GET /video
Return all video in the database

- **URL Params** : None
- **Data Params** : None
- **Headers** : Content-type: application/json
- **Success Response** 
- Code: 200

Content:
```JavaScript
{
    video: [
        {video_objects},
        {video_objects},
        {video_objects}
    ]
}
```
### GET /video/products
Return all video in the database

- **URL Params** : None
- **Data Params** : None
- **Headers** : Content-type: application/json
- **Success Response** 
- Code: 200

Content:
```JavaScript
{
    products: [
        {video_objects},
        {video_objects},
        {video_objects}
    ]
}
```

### GET /video/comments
Return all video in the database

- **URL Params** : None
- **Data Params** : None
- **Headers** : Content-type: application/json
- **Success Response** 
- Code: 200

Content:
```JavaScript
{
    comments: [
        {video_objects},
        {video_objects},
        {video_objects}
    ]
}
```

### GET /video/:id/product
Return all video in the database

- **URL Params** : *Required* : id = [string]
- **Data Params** : None
- **Headers** : Content-type: application/json
- **Success Response** 
- Code: 200

Content:
```JavaScript
{
    products: [
        {video_objects},
        {video_objects},
        {video_objects}
    ]
}
```

### GET /video/:id/comments
Return all video in the database

- **URL Params** : *Required* : id = [string]
- **Data Params** : None
- **Headers** : Content-type: application/json
- **Success Response** 
- Code: 200

Content:
```JavaScript
{
    comments: [
        {video_objects},
        {video_objects},
        {video_objects}
    ]
}
```

### POST /submit
Return all video in the database

- **URL Params** : None
- **Data Params** : 

```JSON
{
    "video_id": string,
    "comment": string,
    "username": string
}
```

- **Headers** : Content-type: application/json
- **Success Response** 
- Code: 200

Content:
```JSON
{
    video: [
        {video_objects},
        {video_objects},
        {video_objects}
    ]
}
```

### POST /video/add
Return all video in the database

- **URL Params** : None
- **Data Params** : 

```JSON
{
    "title" : string,
    "account_name": string,
    "img_url" : string
}
```

- **Headers** : Content-type: application/json
- **Success Response** 
- Code: 200

Content:
```JSON
{
    video: [
        {video_objects},
        {video_objects},
        {video_objects}
    ]
}
```

## Run in local
- Run **npm init**
- Run **npm install express body-parser mongoose nodemon dotenv**
- Import db from dbScript
- Replace DATABASE_URL value in .env file with your MongoDB Connection
- Run **npm start**
- Running on https://localhost:3000
