# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Photo.destroy_all

Photo.create!([
  {
    title: "Avocado Toast",
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    category: "Breakfast",
    description: "Healthy avocado toast with cherry tomatoes",
    likes: 124
  },
  {
    title: "Beef Burger",
    image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    category: "Lunch",
    description: "Juicy beef burger with cheese and vegetables",
    likes: 89
  },
  # Add more seed data...
])

puts "Seeded #{Photo.count} photos"