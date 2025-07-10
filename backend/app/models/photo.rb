class Photo < ApplicationRecord
  validates :image_url, presence: true
  validates :title, presence: true
  validates :category, presence: true
end
