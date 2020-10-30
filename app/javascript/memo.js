function memo(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click",(e) => {
    //new FormData（）でフォーム内の値を取得
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = ` 
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`; //HTMLをlistの直後に挿入
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = "";//空の入力フォームを上書き
    };
    e.preventDefault();
  });
}
window.addEventListener("load",memo);
