Page({

	data: {
		cardInfo: null,
		cardCommnent: null,
		cardTrend: null,
		recommendUser: null
	},

	onLoad: function (options) {
		let card = wx.getStorageSync('card');
		let cardId = card.id;
		wx.request({
			url: `https://api.weibo.cn/2/comments/build_comments?new_version=0&max_id=0&is_show_bulletin=2&c=weixinminiprogram&s=92caf721&id=${cardId}&wm=90163_90001&v_f=2&v_p=60&from=1885396040&gsid=_2A_p8JoUDCoX0kygqlQXYSVII2sPlPcwqaaPJzmFeEtLG8oFeQ7UvWFSEYRw0nE_47jKzB0qp2abTIjLVPiMyniOd&uid=5959130517&count=20&isGetLongText=1&fetch_level=0&max_id_type=0&lfid=102803_ctg1_4488_-_ctg1_4488`,
			method: 'GET',
			success: result => {
				this.setData({
					cardInfo: card,
					cardCommnent: result.data
				});
			}
		});
		wx.request({
			url: `https://api.weibo.cn/2/statuses/extend?gsid=_2A_p8JoUDCoX0kygqlQXYSVII2sPlPcwqaaPJzmFeEtLG8oFeQ7UvWFSEYRw0nE_47jKzB0qp2abTIjLVPiMyniOd&uid=5959130517&wm=90163_90001&from=1885396040&c=weixinminiprogram&s=92caf721&id=4456673508669036&mid=${card.id}&recommend_scene=136,137,141,152&count=20&lfid=102803_ctg1_4488_-_ctg1_4488`,
			method: 'GET',
			success: result => {
				if(result.data.trend && result.data.trend.feeds) {
					this.setData({
						cardTrend: result.data.trend.feeds,
						recommendUser: result.data.wechat_recommend['141'].users
					});
					// console.log(this.data)
				}
			}
		});
	}

})