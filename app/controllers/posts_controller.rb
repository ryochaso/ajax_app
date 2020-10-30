class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end


  def create
    Post.create(content: params[:content])
  end
end
#postアクション  既読した際
  def checked
    post = post.find(params[:id])
    if post.checked 
      post.update(checked: false) #既読の解除
    else　
      post.update(checked: true) #既読にする
    end
    
    item =post.find(params[:id])
    render json: {post: item}
  end