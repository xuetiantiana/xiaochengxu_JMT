Page({
  data: {
    imgUrls: [
      'http://127.0.0.1:8000/static/images/%E8%8A%A5%E6%9C%AB%E6%8E%A8%E9%A6%96%E9%A1%B5%E9%87%8D%E6%9E%84_06.png',
      'http://127.0.0.1:8000/static/images/%E8%8A%A5%E6%9C%AB%E6%8E%A8%E9%A6%96%E9%A1%B5%E9%87%8D%E6%9E%84_06.png',
      'http://127.0.0.1:8000/static/images/%E8%8A%A5%E6%9C%AB%E6%8E%A8%E9%A6%96%E9%A1%B5%E9%87%8D%E6%9E%84_06.png'
    ],
    jobList:[
      {
       url:"123",
        img:"https://cdn.jiemodui.com/img/Public/Uploads/Edit/2017/11/a16b4f0455590b630392a6e6fecc462c.jpg" 
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
    ]
  },
  onReachBottom:function(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
  }
})