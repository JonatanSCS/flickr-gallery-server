# Flickr gallery server
*Explore the most recent images uploaded to Flickr worldwide.*



---

This is the server implementation for [flickr gallery](https://github.com/jportella93/flickr-gallery). It's main purpouse is to consume the flickr api and serve this information to the client.



## Getting started
**1.** Clone the repo

```
$ git clone https://github.com/jportella93/flickr-gallery-server.git
$ cd flickr-gallery-server
```

**2.** Create a **.env** file in the root folder and copy the content from the **.env.example** file. Write your own flickr API key in the .env file.

**3.** Install dependencies:

````
$ yarn install
````
or
````
$ npm i
````


**4.** Start the server:

````
$ yarn start
````
or
````
$ npm start
````

**5.** Go to the [client](https://github.com/jportella93/flickr-gallery) and follow the getting started.



## Built with

* [Koa](https://github.com/koajs/koa) - Async middleware for Node.
* [flickr API](https://www.flickr.com/services/api/) - Provides flickr pictures and user's info.



## Author

Jon Portella - [Github](https://github.com/jportella93) - [LinkedIn](https://www.linkedin.com/in/jonportella/) - [Twitter](https://twitter.com/jportella93)




## License

This project is licensed under the MIT License.
