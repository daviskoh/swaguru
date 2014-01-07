Swaguru::Application.routes.draw do
  root to: 'main#index'
  
  scope 'api' do
    resources :users, only: [:create, :update, :destroy, :show] #do 
      # resources :photos, only: [:index, :create, :destroy, :show]
    # end

    resource :session, only: [:create, :destroy]

    resources :photos, only: [:index, :create, :destroy, :show]

    # resources :users_photos, only: [:create, :destroy, :index]
  end

  match '*path', to: 'main#index', via: :get
end
