Rails.application.routes.draw do
  devise_for :users
  # root to: 'pages#coming_soon'
  root to: 'pages#index'
end
