class DifficultySerializer < ActiveModel::Serializer
  attributes :id, :level, :time
  has_many :scores
end
