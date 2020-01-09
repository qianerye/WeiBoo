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
    },
    ad: [],
    cards: []
  },
  handleItemClick(e){    
    let ele = 'ele' + e.target.dataset.index
    this.setData({
      navIndex: e.currentTarget.dataset['index']
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
      contentHeight: App.globalData.windowHeight - 112
    })
    wx.request({
      url: "https://api.weibo.cn/2/statuses/unread_hot_timeline?new_version=0&gsid=_2A_p8JoUDCoX0kygqlQXYSVII2sPlPcwqaaPJzmFeEtLG8oFeQ7UvWFSEYRw0nE_47jKzB0qp2abTIjLVPiMyniOd&uid=5959130517&from=1885396040&wm=90163_90001&c=weixinminiprogram&networktype=wifi&v_p=60&s=92caf721&lang=zh_CN",
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        group_id: 102803,
        extparam: 'discover|new_feed',
        count: 25,
        containerid: 102803,
        trim_level: 1,
        trim_page_recom: 0,
        need_jump_scheme: 1,
        preAdInterval: -1,
        since_id: 0,
        fid: 102803,
        lfid: '102803_ctg1_4688_-_ctg1_4688',
        refresh_type: 'auto'
      },
      success: result => {
        this.setData({
          cards : result.data.statuses,
          ad : result.data.ad
        })
      },
      file: error => {
        console.log(error.message)
      }
    })
  }
})