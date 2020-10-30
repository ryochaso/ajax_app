class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end

  def create #未読情報を保存する
    post = Post.create(content: params[:content], checked: false)
    render json:{ post: post }# レスポンスをjsonに変更
  end
 #postに対するアクション  既読した際
  def checked
    post = Post.find(params[:id])
    if post.checked 
      post.update(checked: false) #既読の解除
    else
      post.update(checked: true) #既読にする
    end
    
    item =Post.find(params[:id])
    render json: {post: item}
  end
end