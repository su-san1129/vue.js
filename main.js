var app = new Vue({
  el: '#app',
  data: {
    year: (new Date()).getFullYear()
  },
  computed: {
    isUrudoshi: function(){
      if ((this.year%4 == 0) && (this.year%100 != 0) || (this.year%400 == 0)){
        return true;
      } else{
        return false;
      }
    }
  }
});

var demo = new Vue({
  el: '#demo',
  data: {
    show: true
  },
  methods: {
    //現在時刻を返すメソッド
    now1: function() {
      return (new Date()).toLocaleString();
    }
  },
  computed: {
    //現在日時を返す算出プロパティ
    now2: function(){
      return (new Date()).toLocaleString();
    }
  }
});