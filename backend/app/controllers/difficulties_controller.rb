class DifficultiesController < ApplicationController

    def index
        @difficulties = Difficulty.all
        render json: @difficulties, include: ['scores'], status: :ok
    end

    










end
