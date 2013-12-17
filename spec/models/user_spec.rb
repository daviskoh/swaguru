require 'spec_helper'

describe User do 
  # let(:user) { FactoryGirl.create :user }
  before :each do
    User.create(
      name: "Bob",
      email: "bob@bob.com",
      password: "bob",
      password_confirmation: "bob",
      gender: 'male'
    )
  end

  describe "validations" do
    [:name, :email, :password, :gender].each do |attribute|
      it { should validate_presence_of attribute }
    end

    it { should validate_uniqueness_of :email }
  end  
end
