var app = new Vue({
  el: '#app',
  data: {
   category: [] //空の配列を渡す
  },
  computed: {
  		//一件以上選択されている分類を返す算出プロパティ
  	seletedCategory: function(){
  		//一件以上選択されている場合、選択された値を連結した文字列を返す
  		return this.category.length >= 1 ? this.category.join() : '';
  	}
  }
});