class User < ActiveRecord::Base
  validates :name, :email, :gender, presence: true
  #TODO email uniqueness: true
  validates :email, uniqueness: true
  has_secure_password
end