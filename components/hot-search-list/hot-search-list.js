// components/hot-search-list/hot-search-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selectHeight:0
  },
 
  lifetimes:{
    attached: function () { 
      let ht=wx.getSystemInfoSync()
    console.log(ht.windowHeight)
    this.setData({
      selectHeight:ht.windowHeight-60
    })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {      

  }
})
