Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#coming_soon'
end
