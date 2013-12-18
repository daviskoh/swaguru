class User < ActiveRecord::Base
  validates :name, :email, :gender, presence: true
  #TODO email uniqueness: true
  validates :email, uniqueness: true

  has_attached_file :profile_photo

  has_secure_password
end