class UsersController < ApplicationController  
  before_action :authenticated!, :set_user, :authorized!, except: [:create]

  def create
    @user = User.new(user_params)
 
    if @user.save
      render json: @user
    else
      render json: @user.errors#, status: :unprocessable_entity
    end
  end 

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def authorized!
    unless @user.id == session[:user_id]
      # redirect_to user_path(session[:user_id])

    end
  end
end 
