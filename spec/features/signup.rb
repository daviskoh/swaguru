require 'spec_helper'

describe 'a user can create an account', js: true do 
  it 'creates a new user' do
    visit '/users/new'

    within "form.new-user" do
      fill_in :name, with: "Bob"
      fill_in :email, with: "bob@bob.com"
      fill_in :password, with: "Bob"
      fill_in :password_confirmation, with: "Bob"
      select 'male', from: 'gender'

      click_button "Sign Up"
    end

    expect(User.last.name).to eq('Bob')
  end
end