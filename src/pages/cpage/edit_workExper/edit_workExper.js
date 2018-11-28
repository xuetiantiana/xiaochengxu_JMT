// pages/cpage/edit_workExper/edit_workExper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobsite_index: 0,
    jobsite_array: ["请选择", "教育教学", "产品运营"],
    multiArray: [['北京', '山西'], ['北京城区', '北京城区'], ['朝阳区', '通州区', '海淀区']],
    multiIndex: [0, 0, 0],
    startTime: '请选择',
    endTime: '至今',
    startTimeMax:'',
    endTimeMin: '至今',
  },
  jobsitePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      jobsite_index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  startTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startTime: e.detail.value,
      endTimeMin: e.detail.value
    })
  },
  endTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endTime: e.detail.value,
      startTimeMax: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        //ajax  请求发送省份id 返回市区列表
        console.log("ajax  请求发送省份id 返回市区列表");
        break;
      case 1:
        //ajax  请求发送市区id 返回县级列表
        console.log("请求发送市区id 返回县级列表");
        break;
    }
    this.setData(data);
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