// pages/cpage/jobDetail/jobDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  sendResume:function(e){
    console.log("投递简历")
  },
  openMap: function (e) {
    // let obj = e.currentTarget.dataset
    // let latitude = Number(obj.latitude)
    // let longitude = Number(obj.longitude)
    wx.openLocation({
    //   latitude: latitude, // 纬度，范围为-90~90，负数表示南纬
    //   longitude: longitude, // 经度，范围为-180~180，负数表示西经
    //   scale: 16, // 缩放比例 
      name: "福田区彩田路平安国际酒店27楼",
      address:"福田区彩田路平安国际酒店27楼"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})