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
    selectHeight:0,
    searchData: {}
  },
 
  lifetimes:{    
    attached: function () { 
    let that = this
    wx.request({
      url:'https://api.weibo.cn/2/page?gsid=_2A_p8JoUDCoX0kygqlQXYSVII2sPlPcwqaaPJzmFeEtLG8oFeQ7UvWFSEYRw0nE_47jKzB0qp2abTIjLVPiMyniOd&uid=5959130517&from=1885396040&wm=90163_90001&c=weixinminiprogram&s=92caf721&lang=zh_CN&containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot&count=20',
      header: {
        'content-type': 'application/json' 
      },
      success(res) {
        // console.log(res.data)
        that.setData({
          searchData: res.data.cards[0]
        })
        console.log(that.data.searchData);
      }
    
    },
    
    )
    
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
