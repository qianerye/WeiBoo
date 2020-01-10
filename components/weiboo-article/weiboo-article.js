// components/weiboo-article/weiboo-article.js
Component({

  properties: {
    card : Object,
    type:String
  },
  lifetimes :{
    attached : function (){
      let _card = this.data.card
      // _card.created_at = new Date(_card.created_at).getDay()
      // console.log(JSON.stringify(this.data.card))
      
    }
  },
  methods :{
    handleDetailClick(e){
      wx.setStorageSync(
        "card" , e.currentTarget.dataset.card
      )
      wx.navigateTo({
        url: "/pages/detail/detail"
      })
      
    }
  }

})
