# Mall in Wechat Mini Program Cloud development by Taro framework 

# About Taro

By using Taro，we just need to write react style code，and the Taro compile tool can compile it into to different mini programs like Bytedance mini program, wechat mini program, Alipay mini program, QQ mini program, H5, APP etc. And Taro provides many other functions like grammar check and auto complete to improve development experience and efficiency.

# About cloud development

Sample datasets have been uploaded to cloud/doc, you can import them if needed.

Cloud functions are stored in cloud/functions. Each modular has an index file and function file to implement logic.

# About cloud function

Before you use your own cloud environment，you need to initilize your own mini program cloud enviroment. You need to change following files：

-   src/app.js
-   cloud/functions  index.js in each cloud function
-   project.config.json replace appid with your own appid mini program

```jsx
// src/app.js
async componentDidMount () {
  Taro.cloud.init({
    env: 'xxyyzz', // chage to your own cloud function env
    traceUser: true // config to trace user. The default value is true. The admin could see the user's visiting log in admin console.
  })
}
```

# Project Demo

## Project flow

![](http://storage.jd.com/taro-club-img/taro-eshop-process.jpg)

## Home

![](http://storage.jd.com/taro-club-img/taro-eshop-test.jpg)

## Detail

![](http://storage.jd.com/taro-club-img/taro-eshop-detail1.gif)
![](http://storage.jd.com/taro-club-img/taro-eshop-detail.gif)

## Shopping Cart

![](http://storage.jd.com/taro-club-img/taro-eshop-cart.jpg)
![](http://storage.jd.com/taro-club-img/taro-eshop-cart1.jpg)
![](http://storage.jd.com/taro-club-img/taro-eshop-cart2.gif)

## Order

![](http://storage.jd.com/taro-club-img/taro-shop-order12.jpeg)
![](http://storage.jd.com/taro-club-img/taro-eshop-order.jpg)
![](http://storage.jd.com/taro-club-img/taro-eshop-order1.jpg)
