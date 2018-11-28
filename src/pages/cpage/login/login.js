// pages/cpage/login/login.js
const app = getApp()
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teleInput:"",
    telCodeInput:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  teleInput:function(e){
    this.setData({
      teleInput:e.detail.value
    })
  },
  telCodeInput: function (e) {
    this.setData({
      telCodeInput: e.detail.value
    })
  },
  //获取手机验证码
  getTelCode:function(){
    if (util.jmt_match(util.Trim(this.data.teleInput),0)){
      //ajax请求获取手机验证码
    }else{
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '手机号格式错误',
        success: function (res) { }
      })
    }
  },
  //手机号验证码登录
  loginFunction:function(e){
    console.log(22)
    if (util.Trim(this.data.telCodeInput)==""){
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入手机验证码',
        success: function (res) { }
      });
      return false;
    }
    if (!util.jmt_match(util.Trim(this.data.teleInput), 0)) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '手机号格式错误',
        success: function (res) { }
      });
      return false;
    }
    //【ajax发送手机号验证码进行登录功能】
  },
  //微信授权登录
  bindgetphonenumber:function(e){
    // console.log(e)
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData) ;
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '未授权',
        success: function (res) { }
      })
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '同意授权',
        success: function (res) { }
      })
      console.log(app.globalData.userCode)
    }  

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