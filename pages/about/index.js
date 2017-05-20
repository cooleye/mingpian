
// pages/about/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    userProfile:{
      job:'HTML5讲师',
      location:'北京',
      profession:'IT职业教育',
      email:'iscooleye@163.com',
      wechat:'sundaymorning',
      mobile:'15011554923',
      github:'https://github.com/cooleye',
      introduction:'积云教育html5讲师，积云教育html5讲师，积云教育html5讲师，积云教育html5讲师，积云教育html5讲师，积云教育html5讲师，积云教育html5讲师，积云教育html5讲师，积云教育html5讲师，积云教育html5讲师积云教育html5讲师积云教育html5讲师，积云教育html5讲师，积云教育html5讲师积云教育html5讲师积云教育html5讲师，积云教育html5讲师'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    
  },
  onShareAppMessage: function () {
    return {
      title: 'Davie 爱学习',
      path: '/pages/about/index?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})