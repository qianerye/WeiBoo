const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: ["热门", "热搜榜", "视频", "明星", "时尚", "搞笑", "综艺"],
    navIndex: 0,
    contentHeight: 0,
    ad : [],
    cards : []
  },

  handleItemClick(e) {
    this.setData({
      navIndex: e.currentTarget.dataset['index']
    })
  },

  onLoad() {
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