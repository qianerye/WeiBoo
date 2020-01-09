// components/weiboo-article/weiboo-article.js
Component({

  properties: {
    card : Object,
    type:String
  },
  lifetimes :{
    attached : function (){
      let _card = this.data.card
      let month = new Date(_card.created_at).getMonth() + 1
      let day = new Date(_card.created_at).getDay()
      let hour = new Date(_card.created_at).getHours()
      let min = new Date(_card.created_at).getMinutes()
      month = month >= 10 ? month : "0"+month
      day = day >= 10 ? day : "0"+day
      hour = hour >= 10 ? hour : "0"+hour
      min = min >= 10 ? min : "0"+min
      let created_at = month + '-' + day + " " + hour + ':' + min
      _card.created_at = created_at
      let reg = /<[^<>]+>/g
      _card.source = _card.source.replace(reg , '')
      this.setData({  
        card : _card
      })
      // console.log(this.data.card)
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
