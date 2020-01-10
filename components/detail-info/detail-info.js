// components/detail-info/detail-info.js
Component({

	data: {
		cardInfo: Object,
		infoHeight: 'auto',

	},

	lifetimes: {
		attached: function() {
			let card = wx.getStorageSync('card');
			this.setData({
				cardInfo: card
			});
			// let query = wx.createSelectorQuery().in(de);
			// query.select(".detail-info-wrap").boundingClientRect();
			// query.exec(res => {
			// 	console.log(res);
			// })
		}
	}

})
