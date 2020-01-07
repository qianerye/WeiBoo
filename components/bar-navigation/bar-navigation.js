const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    type : String,
    hotSearchWords : {
      type : String,
      value : '微博抄袭小队'
    },
    barText:{
      type :String,
      value : ''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
      console.log(App)
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop : App.globalData.navTop
      })
     }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //回退
    navBack: function () {
        wx.navigateBack({
          delta: 1
        })      
    },
    //回主页
    toFind: function () {
      wx.switchTab({
        url: '/pages/find/find'
      })
    },
  }
})