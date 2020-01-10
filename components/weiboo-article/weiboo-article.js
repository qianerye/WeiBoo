// components/weiboo-article/weiboo-article.js
Component({
  properties: {
    card: Object,
    type: Number
  },
  lifetimes: {
    attached: function () {
      let _card = this.data.card
      if (this.data.type === 2) {
        if( this.data.card.card_type == 108 ){
          _card.created_at = _card.playlist.statuses ? this.timeChange(_card.playlist.statuses[0].created_at) : "now"
          _card.source = _card.playlist.statuses ? this.sourceChange(_card.playlist.statuses[0].source) : ''
        }
      } else {
        _card.created_at = this.timeChange(_card.created_at)
        _card.source = this.sourceChange(_card.source)
        if (_card.pic_num > 0) {
          let keys = Object.keys(_card.pic_infos)
          let images = keys.reduce((imgs, item) => {
            imgs.push(_card.pic_infos[item])
            return imgs
          }, [])
          _card.images = images
        }
      }
      this.setData({
        card: _card
      })
    }
  },
  methods: {
    handleDetailClick(e) {
      wx.setStorageSync(
        "card", e.currentTarget.dataset.card
      )
      wx.navigateTo({
        url: "/pages/detail/detail"
      })

    },
    timeChange(time){
      let month = new Date(time).getMonth() + 1
      let day = new Date(time).getDay()
      let hour = new Date(time).getHours()
      let min = new Date(time).getMinutes()
      month = month >= 10 ? month : "0" + month
      day = day >= 10 ? day : "0" + day
      hour = hour >= 10 ? hour : "0" + hour
      min = min >= 10 ? min : "0" + min
      let created_at = month + '-' + day + " " + hour + ':' + min
      return created_at
    },
    sourceChange(source){
      let reg = /<[^<>]+>/g
      let _source = source.replace(reg, '')
      return _source
    }
  }

})