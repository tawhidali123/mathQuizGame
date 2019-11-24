class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :points, :difficulty_id
  
end
