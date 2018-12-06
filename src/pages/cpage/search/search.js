// pages/cpage/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobList: [
      {
        url: "123",
        img: "https://cdn.jiemodui.com/img/Public/Uploads/Edit/2017/11/a16b4f0455590b630392a6e6fecc462c.jpg"
      },
      {
        url: "123",
        img: "https://cdn.jiemodui.com/img/Public/Uploads/Edit/2017/05/220d12e25faf33c75e9494d6f8fc31f9.jpg"
      },
      {
        url: "123",
        img: "https://cdn.jiemodui.com/img/Public/Uploads/Edit/2017/08/371903865ac21f723657f4ce9ae58058.jpg"
      },
      {
        url: "123",
        img: "https://cdn.jiemodui.com/img/Public/Uploads/Edit/2018/05/9814e78ee723bad4a8fd2f70627a135a.jpg"
      },
      {
        url: "123",
        img: "https://cdn.jiemodui.com/img/Public/Uploads/Edit/2018/03/39586ff862fcd77d0f66590cc4d10453.jpg"
      },
      {
        url: "123",
        img: "https://cdn.jiemodui.com/img/Public/Uploads/Edit/2018/05/5d4d7175cf44bea458b6729219847802.jpg"
      },
    ],
    history:[],
    inputValue:"",
    hot_ul:["设计","技术研发","产品运营"],
    jobYes:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //点击键盘上的搜索
  serch:function(e){
    console.log(e.detail.value)
    this.SearchFunction()
  },
  //点击搜索按钮
  inputSearch: function (){
    this.SearchFunction()
  },
  //点击热门搜索
  hotSearch:function(e){
    this.setData({
      inputValue: e.target.dataset.value
    })
    this.SearchFunction()
  },
  SearchFunction:function(){
    var history = wx.getStorageSync('history') || []
    if (!this.data.inputValue || history.indexOf(this.data.inputValue) != -1){
    }else{
      history.unshift(this.data.inputValue)
      wx.setStorageSync('history', history);
      this.setData({
        history: history
      })
    }
    this.setData({
      inputValue: "",
      // jobYes:true
    })
  },
  
  //点击删除历史记录
  remove:function(e){
    var history = this.data.history;
    var index = history.indexOf(e.target.dataset.value)
    history.splice(index,1)
    this.setData({
      history: history
    })
    wx.setStorageSync('history', history);
  },
  //input变化
  bindKeyInput: function (e) {
    this.setData({
      inputValue: Trim(e.detail.value)
    })
  },
  onLoad: function (options) {
    // 展示本地存储能力
    var history = wx.getStorageSync('history') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('history', history)
    this.setData({
      history: history
    })
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
    this.setData({
      jobYes:false
    })
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