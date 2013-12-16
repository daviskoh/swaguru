class User < ActiveRecord::Base
  validates :name, :email, :gender, presence: true
  #TODO email uniqueness: true
  has_secure_password

  # blog 42 floors start
  # attr_accessor :password

  # def password=(pass)
  #   return if pass.blank?
  #   @password = pass
  #   self.password_digest = BCrypt::Password.create(pass)
  # end
end