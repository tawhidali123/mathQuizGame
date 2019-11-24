class DifficultySerializer < ActiveModel::Serializer
  attributes :id, :level, :time, :scores
  # has_many :scores
end
