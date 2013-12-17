FactoryGirl.define do 
  factory :user do 
    name    { Faker::Name.name }
    email   { Faker::Internet.email }
    password_digest  'ello'
    password_confirmation 'ello'
    gender 'male'
  end
end