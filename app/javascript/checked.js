function check() {
  const posts = document.querySelectorAll(".post");//全てのポストを指定してる
  posts.forEach(function (post){ //ポスト一覧を表示してる
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => {
      const postId =post.getAttribute("data-id");//postのidを指定して取得
      const XHR = new XMLHttpRequest();//XMLの呼び出し
      XHR.open("GET",`/posts/${postId}`, true);//リクエストの指定
      XHR.responseType = "json";//返すデータの指定
      XHR.send();//データ送信
      XHR.onload = () => {
        if (XHR.status != 200) { //ステータスが200以外だとエラー nullでJSの処理終了
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;          
        }
        const item = XHR.response.post;
        if (item.checked === true) { //既読ならデータチェク trueにする
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
setInterval(check,1000);//1秒に一回にcheckが動く