class UsersController < ApplicationController   

    def index
        @users = User.all
        render json: @users
    end

    def show 
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @user = User.create(params.require("user").permit(:username, :password, :phrase))

        render json: @user
    end

    def update
        
        @user = User.find(params[:id])
        @user.update(username: params[:username], password: params[:password], phrase: params[:phrase])

<<<<<<< HEAD
    def update
        
        @user = User.find(params[:id])
        @user.update(username: params[:username], password: params[:password], phrase: params[:phrase])

        render json: @user
    end

    
    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end
=======
        render json: @user
    end
>>>>>>> refs/remotes/origin/tawhid

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end



end
