class User < ActiveRecord::Base
  validates :name, :email, :gender, presence: true
  has_secure_password
end