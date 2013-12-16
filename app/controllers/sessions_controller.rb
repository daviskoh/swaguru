class SessionsController < ApplicationController
  def create
    # authenticate that user/pass combo is legit
    user = User.find_by(email: params[:email])
    # binding.pry

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      
      # going to return an integer
      render json: session[:user_id], status: 200
    else
      # redirect_to new_session_path
      # binding.pry
      render json: {"text" => 'Incorrect email and password combination'}, status: 400
    end
  end

  def destroy
    session[:user_id] = nil
    render status: 200
  end
end