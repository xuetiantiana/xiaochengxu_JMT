// pages/cpage/edit_jobIntention/edit_jobIntention.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    jobsite_index: 0,
    jobsite_array: ["请选择", "教育教学", "产品运营"],
    jobType_index: 0,
    jobType_array: [ "全职", "实习"],
    salary_index: 0,
    salary_array: ["请选择", "3k一下", "3-5k", "2年", "3年", "4年", "5年", "6年", "7年", "8年", "9年", "10年", "10年以上"],
    currStatus_index: 0,
    currStatus_array: ["请选择", "观望中，有合适就换", "我是学生", "勿扰，暂时不找工作", "已离职，可快速上班"],
    dutyTime_index: 0,
    dutyTime_array: ["请选择", "一周以内", "1个月以内"],
    items: [
      { name: 'USA', value: '北京' },
      { name: 'CHN', value: '上海', checked: 'true' },
      { name: 'BRA', value: '厦门' },
      { name: 'JPN', value: '广州' },
      { name: 'ENG', value: '深圳' },
      { name: 'TUR', value: '郑州' },
      { name: 'TUR', value: '武汉' }
    ]
    
  },
  jobTypePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      jobType_index: e.detail.value
    })
  },
  
  jobsitePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      jobsite_index: e.detail.value
    })
  },
  salaryPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      salary_index: e.detail.value
    })
  },
  currStatusPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      currStatus_index: e.detail.value
    })
  },
  dutyTimePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dutyTime_index: e.detail.value
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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