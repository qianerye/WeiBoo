const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList : ["热门" , "热搜榜" , "视频" , "明星" , "时尚" ,"搞笑" , "综艺"],
    navIndex : 0,
    contentHeight : 0
  },

  handleItemClick(e){
    this.setData({
      navIndex : e.currentTarget.dataset['index']
    })
  },

  onLoad(){
    console.log(App)
    this.setData({
      contentHeight : App.globalData.windowHeight - 112
    })
  }

})