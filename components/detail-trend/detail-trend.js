// components/detail-trend/detail-trend.js
Component({

	properties: {
		trend: Array
	},

	data: {
		leftTrend: [],
		rightTrend: []
	},

	lifetimes: {
		attached: function() {
			// console.log(this.properties.trend);
			if(this.properties.trend.length > 0) {
				let trendList = this.properties.trend;
				let leftHeight = 0;
				let rightHeight = 0;
				let leftList = [];
				let rightList = [];
				trendList.forEach(item => {
					if(item.pic_infos) {
						let keys = Object.keys(item.pic_infos);
						let num = Math.floor(keys.length * Math.random());
						let key = keys[num];
						if(leftHeight <= rightHeight) {
							leftHeight += item.pic_infos[key].bmiddle.height / item.pic_infos[key].bmiddle.width;
							leftList.push({
								id: item.itemid,
								src: item.pic_infos[key].bmiddle.url,
								title: item.title_sub,
								zan: item.attitudes_count,
								userHead: item.user.avatar_hd,
								userName: item.user.name
							});
						} else {
							rightHeight += item.pic_infos[key].bmiddle.height / item.pic_infos[key].bmiddle.width;
							rightList.push({
								id: item.itemid,
								src: item.pic_infos[key].bmiddle.url,
								title: item.title_sub,
								zan: item.attitudes_count,
								userHead: item.user.avatar_hd,
								userName: item.user.name
							});
						}
					}
				});
				this.setData({
					leftTrend: leftList,
					rightTrend: rightList
				});
			}
		}
	},

	methods: {

	}
})
