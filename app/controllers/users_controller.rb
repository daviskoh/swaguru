class UsersController < ApplicationController  
  before_action :authenticated!, :set_user, :authorized!, except: [:create]
  #TODO users can see other users' pages

  respond_to :json#, :html

  def show
    # binding.pry
    render json: @user, status: 200
  end

  def create
    # binding.pry
    #TODO change to user_params, NOT passing through PASSWORD
    user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation], gender: params[:gender])
 
    if user.save
      render json: user, status: 200
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end 

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :gender)
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
end 
