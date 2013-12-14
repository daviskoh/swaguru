require 'spec_helper'

describe 'a user can create an account', js: true do 
  it 'creates a new user' do
    visit '/#users/new'

    within "form.new-user" do
      fill_in :name, with: "Bob Homie"
      fill_in :email, with: "Bob Homie"
      fill_in :password, with: "Bob Homie"
      select 'male', from: 'gender'

      click_button "Sign Up"
    end

    within "form.sign-in" do
      expect(page).to have_content "Created new account!"
    end
  end
end