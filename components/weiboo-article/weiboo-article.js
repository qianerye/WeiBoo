// components/weiboo-article/weiboo-article.js
Component({

  properties: {
    card : Object,
    type:String
  },
  lifetimes :{
    attached : function (){
      console.log(this.data.card)
    }
  }
})
