require 'spec_helper'

describe User do 
  let(:user) { FactoryGirl.create(:user) }

  describe "validations" do
    [:name, :email, :password, :gender].each do |c|
      it { should validate_presence_of(c) }
    end
  end  
end
