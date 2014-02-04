class UsersController < ApplicationController  
  before_action :authenticated!, :set_user, :authorized!, except: [:create]
  #TODO users can see other users' pages

  respond_to :json#, :html

  def show
    # binding.pry
    if @user.profile_photo_file_name
      render json: @user.as_json(methods: [:profile_photo_url, :photos]), status: 201
    else
      render json: @user, status: 201
    end
  end

  def create
    # binding.pry
    #TODO also unset password on client side
    #TODO change to user_params, NOT passing through PASSWORD
    @user = User.new(user_params)
 
    if @user.save
      render json: secure_user, status: 200
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end 

  def update
    if @user.update_attributes(user_params)
      # binding.pry
      # redirect_to user_path(@user)
      render json: @user.as_json(methods: :profile_photo_url), status: 200
    else
      # binding.pry
      # render :edit
      render status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :gender, :profile_photo_file_name, :profile_photo_content_type, :profile_photo_file_size, :profile_photo_updated_at, :profile_photo)
  end

  def set_user
    # binding.pry
    @user = User.find(params[:id])
  end

  def authorized!
    unless @user.id == session[:user_id]
      # redirect_to user_path(session[:user_id])
      render status: :unauthorized
    end
  end

  def secure_user
    {id: @user.id, name: @user.name, email: @user.email, gender: @user.gender}
  end
end 
