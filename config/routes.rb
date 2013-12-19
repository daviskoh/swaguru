Swaguru::Application.routes.draw do
  root to: 'main#index'
  
  resources :users, only: [:create, :update, :destroy, :show]

  resource :session, only: [:create, :destroy]

  resources :photos, only: [:index, :create, :destroy, :show]

  resources :users_photos, only: [:create, :destroy, :index]

  # get '/*' => redirect('/')
end
