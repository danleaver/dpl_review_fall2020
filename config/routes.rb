Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :instruments do
      resources :quotes
      resources :lessons
    end
  end 
end
