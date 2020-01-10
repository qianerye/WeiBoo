## WeiBoo开发文档



### ICON 字体

- 全局引入/icons/icon.wxss( 可查看已加载图标的类名 )

  ```JavaScript
  <text class="iconfont icon-sousuo"></text>
  ```

  > 使用text标签加上iconfont 以及所需字体类名  共两个   即可

  

### 组件

- bar-navigation

  ```javascript
  <bar-navigation type="home" barText='发微博'></bar-navigation>
  ```

  > type : 可不传  可选( home , search  ) 

  >  barText : 可不传  ,  传入则中间会显示文本内容   String

