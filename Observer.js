/**
* 观察者模式: 使多个观察者对象可以同时监听某一个对象
* 
*/

var Observer = {

  // 订阅
  addSubscriber: function (cb) {
    this.subscribers[this.subscribers.length] = cb
  },
  // 退订
  removeSubscriber: function (cb) {
    for (var i=0;i<this.subscribers.length;i++) {
      if (this.subscribers[i] === cb) delete this.subscribers[i]
    }
  },
  // 发布
  publish: function (what) {
    for (var i=0;i<this.subscribers.length;i++) {
      if (typeof this.subscribers[i] === 'function') this.subscribers[i](what)
    }
  },
  // 将对象o具有观察者功能
  make: function (o) {
    for (var i in this) {
      o[i] = this[i]
      o.subscribers = []
    }
  }

}
