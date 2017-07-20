Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # below is the => root_path
  root 'static_pages#home'
  # /portfolio => portfolio_path
  get '/portfolio',     to: 'static_pages#portfolio'
end
