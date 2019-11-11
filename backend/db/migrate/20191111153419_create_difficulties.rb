class CreateDifficulties < ActiveRecord::Migration[5.2]
  def change
    create_table :difficulties do |t|
      t.string :level
      t.integer :time

      t.timestamps
    end
  end
end
