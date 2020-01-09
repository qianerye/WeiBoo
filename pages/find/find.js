const App = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navList : ["热门" , "热搜榜" , "视频" , "明星" , "时尚" ,"搞笑" , "综艺"],
    navIndex : 0,
    contentHeight : 0,
    moveParams:{
      scrollLeft: 0, // scroll-view滚动的距离,默认为0,因为没有触发滚动  
      screenHalfWidth:wx.getSystemInfoSync().windowWidth/2 
    }
  },
  handleItemClick(e){    
    let ele = 'ele' + e.target.dataset.index
    this.setData({
      navIndex : e.currentTarget.dataset['index']
    })
    this.getRect("#"+ele)
  },
  getRect(ele){
    let that=this;
    wx.createSelectorQuery().select(ele).boundingClientRect(function(rect){     
      let moveParams=that.data.moveParams
      moveParams.subLeft = rect.left;
      moveParams.subHalfWidth = rect.width / 2;     
      that.moveTo()
    }).exec()   
  },
  moveTo() {
    // console.log(this.data.moveParams);
    let { subLeft, screenHalfWidth, subHalfWidth, scrollLeft} = this.data.moveParams
    let distance = subLeft - screenHalfWidth + subHalfWidth;
    scrollLeft = scrollLeft + distance;
    this.setData({
      scrollLeft: scrollLeft
    })
  },
  scrollMove(e) {  
    let moveParams = this.data.moveParams;
    moveParams.scrollLeft = e.detail.scrollLeft;
    this.setData({
      moveParams: moveParams
    })
  },  
  onLoad(){
    console.log(App)
    this.setData({
      contentHeight : App.globalData.windowHeight - 112
    })
  }
})