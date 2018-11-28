// pages/cpage/edit_baseInfor/edit_baseInfor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex_index: 0,
    sex_array:["请选择","男","女"],
    birth: '未知',
    topedu_index: 0,
    topedu_array: ["请选择", "专科", "本科","硕士","博士"],
    worktime_index: 0,
    worktime_array: ["请选择", "应届毕业生", "1年", "2年", "3年", "4年", "5年", "6年", "7年", "8年", "9年", "10年", "10年以上"],
    marriage_index: 0,
    marriage_array: ["请选择", "未婚", "已婚", "已婚已育", "离异"],
    foreign_index: 0,
    foreign_array: ["请选择", "有", "无"],
    multiArray: [['北京', '山西'], ['北京城区', '北京城区'], ['朝阳区', '通州区','海淀区']],
    multiIndex: [0, 0, 0],
  },
  sexPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sex_index: e.detail.value
    })
  },
  birthDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      birth: e.detail.value
    })
  },
  topeduPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      topedu_index: e.detail.value
    })
  },
  worktimePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      worktime_index: e.detail.value
    })
  },
  marriagePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      marriage_index: e.detail.value
    })
  },
  foreignPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      foreign_index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
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