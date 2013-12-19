class UsersPhotos < ApplicationController
  before_action :authenticated!, :set_user, :authorized!, except: [:index]

  def index
    binding.pry
    render json: @user.photos.as_json(methods: :image_url), status: 200
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      # binding.pry
      render json: @photo.as_json(methods: :image_url), status: 200
    else
      # binding.pry
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:user_id, :image, :image_file_name, :image_content_type, :image_file_size, :image_updated_at)
  end

  def set_user
    @user = User.find(session[:user_id])
  end

  def authorized!
    unless @user.id == session[:user_id]
      # redirect_to user_path(session[:user_id])
      render status: :unauthorized
      return
    end
  end
end