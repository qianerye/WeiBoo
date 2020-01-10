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
    let index = e.target.dataset.index
    let ele = 'ele' + e.target.dataset.index
    this.setData({
      navIndex: index,
      cards : []
    })
    this.getRect("#"+ele)
    switch (index) {
      case 0:
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
              cards: result.data.statuses,
              ad: result.data.ad
            })
          },
          fail: error => {
            console.log(error.message)
          }
        })
        break;
      case 2:
        wx.request({
          url: 'https://api.weibo.cn/2/cardlist?gsid=_2A_p_i4vZCoV0kysilgrYS1oO2cDlPcwqBqQTzmFeEtLG4IFeQ5JQWFSEbotX0iLAZIFlue5-f6UoAhMyMyUfXDlc&from=1885396040&c=weixinminiprogram&s=e3c1c084&containerid=231643_1&page=1',
          success: result => {
            console.log(result)
            this.setData({
              cards : result.data.cards
            })
          },
          fail: error => {
            console.log(error.message)
          }
        })
        break;
      case 3:
        wx.request({
          url: "https://api.weibo.cn/2/statuses/unread_hot_timeline?new_version=0&gsid=_2A_p8JoUDCoX0kygqlQXYSVII2sPlPcwqaaPJzmFeEtLG8oFeQ7UvWFSEYRw0nE_47jKzB0qp2abTIjLVPiMyniOd&uid=5959130517&from=1885396040&wm=90163_90001&c=weixinminiprogram&networktype=wifi&v_p=60&s=92caf721&lang=zh_CN",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            group_id: 1028034288,
            extparam: 'discover|new_feed',
            count: 25,
            containerid: '102803_ctg1_4288_-_ctg1_4288',
            trim_level: 1,
            trim_page_recom: 0,
            need_jump_scheme: 1,
            preAdInterval: -1,
            since_id: 0,
            fid: '102803_ctg1_4288_-_ctg1_4288',
            lfid: 'video',
            refresh_type: 'auto'
          },
          success: result => {
            this.setData({
              cards: result.data.statuses
            })
          },
          fail: error => {
            console.log(error.message)
          }
        })
        break;
      case 4:
        wx.request({
          url: "https://api.weibo.cn/2/statuses/unread_hot_timeline?new_version=0&gsid=_2A_p8JoUDCoX0kygqlQXYSVII2sPlPcwqaaPJzmFeEtLG8oFeQ7UvWFSEYRw0nE_47jKzB0qp2abTIjLVPiMyniOd&uid=5959130517&from=1885396040&wm=90163_90001&c=weixinminiprogram&networktype=wifi&v_p=60&s=92caf721&lang=zh_CN",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            group_id: 1028034488,
            extparam: 'discover|new_feed',
            count: 25,
            containerid: '102803_ctg1_4488_-_ctg1_4488',
            trim_level: 1,
            trim_page_recom: 0,
            need_jump_scheme: 1,
            preAdInterval: -1,
            since_id: 0,
            fid: '102803_ctg1_4488_-_ctg1_4488',
            lfid: '102803_ctg1_4288_-_ctg1_4288',
            refresh_type: 'auto'
          },
          success: result => {
            this.setData({
              cards: result.data.statuses
            })
          },
          fail: error => {
            console.log(error.message)
          }
        })
        break;
      case 5:
        wx.request({
          url: "https://api.weibo.cn/2/statuses/unread_hot_timeline?new_version=0&gsid=_2A_p8JoUDCoX0kygqlQXYSVII2sPlPcwqaaPJzmFeEtLG8oFeQ7UvWFSEYRw0nE_47jKzB0qp2abTIjLVPiMyniOd&uid=5959130517&from=1885396040&wm=90163_90001&c=weixinminiprogram&networktype=wifi&v_p=60&s=92caf721&lang=zh_CN",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            group_id: 1028034388,
            extparam: 'discover|new_feed',
            count: 25,
            containerid: '102803_ctg1_4388_-_ctg1_4388',
            trim_level: 1,
            trim_page_recom: 0,
            need_jump_scheme: 1,
            preAdInterval: -1,
            since_id: 0,
            fid: '102803_ctg1_4388_-_ctg1_4388',
            lfid: '102803_ctg1_4688_-_ctg1_4688',
            refresh_type: 'auto'
          },
          success: result => {
            this.setData({
              cards: result.data.statuses
            })
          },
          fail: error => {
            console.log(error.message)
          }
        })
        break;
      case 6:
        wx.request({
          url: "https://api.weibo.cn/2/statuses/unread_hot_timeline?new_version=0&gsid=_2A_p8JoUDCoX0kygqlQXYSVII2sPlPcwqaaPJzmFeEtLG8oFeQ7UvWFSEYRw0nE_47jKzB0qp2abTIjLVPiMyniOd&uid=5959130517&from=1885396040&wm=90163_90001&c=weixinminiprogram&networktype=wifi&v_p=60&s=92caf721&lang=zh_CN",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            group_id: 1028034688,
            extparam: 'discover|new_feed',
            count: 25,
            containerid: '102803_ctg1_4688_-_ctg1_4688',
            trim_level: 1,
            trim_page_recom: 0,
            need_jump_scheme: 1,
            preAdInterval: -1,
            since_id: 0,
            fid: '102803_ctg1_4688_-_ctg1_4688',
            lfid: '102803_ctg1_4388_-_ctg1_4388',
            refresh_type: 'auto'
          },
          success: result => {
            this.setData({
              cards: result.data.statuses
            })
          },
          fail: error => {
            console.log(error.message)
          }
        })
        break;

    }
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
    let { subLeft, screenHalfWidth, subHalfWidth, scrollLeft} = this.data.moveParams
    let distance = subLeft - screenHalfWidth + subHalfWidth;
    scrollLeft = scrollLeft + distance;
    this.setData({
      scrollLeft: scrollLeft
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
          cards: result.data.statuses,
          ad: result.data.ad
        })
      },
      file: error => {
        console.log(error.message)
      }
    })
  }
})