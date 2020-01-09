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
			console.log(this.properties.trend);
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
							leftHeight += item.pic_infos[key].bmiddle.height;
							leftList.push({
								id: item.itemid,
								src: item.pic_infos[key].bmiddle.url
							});
						} else {
							rightHeight += item.pic_infos[key].bmiddle.height;
							rightList.push({
								id: item.itemid,
								src: item.pic_infos[key].bmiddle.url
							});
						}
					}
				});
				this.setData({
					leftTrend: leftList,
					rightTrend: rightList
				})
			}
		}
	},

	methods: {

	}
})
