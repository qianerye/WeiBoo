// components/detail-custom-nav/detail-custom-nav.js
Component({

	data: {
		navTop: 0,
		navHeight: 0,
		navMarginRight: 0,
		navMarginLeft: 0,
		menuButton: null
	},

	lifetimes: {
		attached: function() {
			let systemInfo = null
			wx.getSystemInfo({
				success: res => {
					systemInfo = res;
				}
			});

			let menuButtonInfo = wx.getMenuButtonBoundingClientRect();
			// console.log(systemInfo,menuButtonInfo);
			this.setData({
				navTop: systemInfo.statusBarHeight,
				navHeight: menuButtonInfo.height + (menuButtonInfo.top - systemInfo.statusBarHeight) * 2,
				navMarginRight: (systemInfo.windowWidth - menuButtonInfo.right) * 2 + menuButtonInfo.width,
				navMarginLeft: systemInfo.windowWidth - menuButtonInfo.right,
				menuButton: {
					width: menuButtonInfo.width,
					height: menuButtonInfo.height,
					left: menuButtonInfo.right,
					top: menuButtonInfo.top - systemInfo.statusBarHeight
				}
			});
		}
	}

})
