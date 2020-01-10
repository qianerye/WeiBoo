// components/detail-comment/detail-comment.js
Component({

	properties: {
		rootComment: Object,
		repostCount: Number,
		commentsCount: Number,
		attitudesCount: Number
	},

	data: {
		commentCreatedAt: ""
	},

	lifetimes: {
		attached: function() {
			// console.log(this.properties.rootComment);
			if(this.properties.rootComment) {
				let date = new Date(this.properties.rootComment.created_at);
				let m = date.getMonth();
				let month = m + 1 >= 10 ? m + 1 : '0' + (m + 1);
				this.setData({
					commentCreatedAt: `${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
				})
			}
		}
	}

})
