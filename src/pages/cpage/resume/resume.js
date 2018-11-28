// pages/cpage/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPic:"https://cdn.jiemodui.com/img/Public/Uploads/icon/201811/5be12ce0bcfcc.png320_240.jpg"
  },
  choseImg:function(){
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res)
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          imgPic: tempFilePaths
        })
        wx.showModal({
          content: '最多能上传' +1+ '张图片',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('确定');
            }
          }
        })
        // wx.showToast({
        //   title: '正在上传...',
        //   icon: 'loading',
        //   mask: true,
        //   duration: 10000
        // })  
        // wx.uploadFile({

        //   url: 'https://shop.gxyourui.cn',

        //   filePath: res.tempFilePaths[0],
        //   name: 'images',
        //   header: {
        //     "Content-Type": "multipart/form-data",
        //     'Content-Type': 'application/json'
        //   },
        //   success: function (data) {
        //     console.log(data);
        //   },
        //   fail: function (data) {
        //     console.log(data);
        //   }
        // })
      }
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