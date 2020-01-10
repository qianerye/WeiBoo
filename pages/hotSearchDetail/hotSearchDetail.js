// pages/hotSearchDetail/hotSearchDetail.js
Page({
 
  data: {
    keyword:"",
    cards:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    // console.log(options.keyword)   
    this.setData({
      keyword:options.keyword   
    })
    wx.request({
      url:'https://api.weibo.cn/2/searchall?gsid=_2A_p_i4vZCoV0kysilgrYS1oO2cDlPcwqBqQTzmFeEtLG4IFeQ5JQWFSEbotX0iLAZIFlue5-f6UoAhMyMyUfXDlc&uid=6166118324&from=1885396040&wm=90163_90001&c=weixinminiprogram&v_f=1&s=e3c1c084&lang=zh_CN&count=10&containerid=100103type%3D1%26t%3D3%26q%3D%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%E9%98%B5%E5%AE%B9&page=1&sort=hot',
      success(result){
        // console.log(result.data.cards);
        that.setData({
          cards: result.data.cards
        })    
        // console.log(that.data.cards);    
      }      
    })
 
  },
  changeipt(){
    console.log(1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})