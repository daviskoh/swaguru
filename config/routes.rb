Swaguru::Application.routes.draw do
  root to: 'main#index'
  
  resources :users, only: [:create, :update, :destroy, :show]

  resource :session, only: [:create, :destroy]
end
