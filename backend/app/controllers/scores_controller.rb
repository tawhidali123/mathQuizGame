class ScoresController < ApplicationController

    def index
        @scores = Score.all
        render json: @scores
    end

    def create
        
        @score = Score.create(params.require(:score).permit(:user_id, :difficulty_id, :points))
<<<<<<< HEAD

        render json: @score
    end

=======
>>>>>>> refs/remotes/origin/tawhid

        render json: @score
    end


end
