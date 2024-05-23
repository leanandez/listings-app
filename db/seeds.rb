# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

listings = [
  { address: '9209 Independence Loop, McKinney, TX 75069', description: '3 BDS  |  3.5 BA  |  1,950 sqft', img: 'property1.png' },
  { address: '9409 Independence Loop, McKinney, TX 75069', description: '3 BDS  |  3.5 BA  |  1,950 sqft', img: 'property1.png' },
  { address: '9509 Independence Loop, McKinney, TX 75069', description: '3 BDS  |  3.5 BA  |  1,950 sqft', img: 'property2.png' },
  
]

listings.each do |listing|
  Listing.find_or_create_by!(address: listing[:address]) do |l|
    l.description = listing[:description]
    l.img = listing[:img]
  end
end