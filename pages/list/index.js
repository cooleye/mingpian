// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    circular: true,
    workds: [
      {
        title: '积云教育',
        logo: '',
        subtitle: '培养年薪20万的技术专家##',
        skills: ['1.好好学习，天天向上1', '2.好好学习，天天向上2', '3.好好学习，天天向上3', '4.好好学习，天天向上4', '5.好好学习，天天向上5', '6.好好学习，天天向上6']
      },
      {
        title: '积云教育',
        logo: '',
        subtitle: '培养年薪20万的技术专家',
        skills: ['1.好好学习，天天向上', '2.好好学习，天天向上', '3.好好学习，天天向上', '4.好好学习，天天向上', '5.好好学习，天天向上', '6.好好学习，天天向上']
      },
      {
        title: '积云教育',
        logo: '',
        subtitle: '培养年薪20万的技术专家',
        skills: ['1.好好学习，天天向上', '2.好好学习，天天向上', '3.好好学习，天天向上', '4.好好学习，天天向上', '5.好好学习，天天向上', '6.好好学习，天天向上']
      }
    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
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