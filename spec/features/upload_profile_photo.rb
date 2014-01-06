require 'spec_helper'

describe 'a user can upload a profile photo', js: true do 
  before :each do 
    visit '/session/new'

    within 'form.sign-in' do 
      fill_in :email, with: "bob@bob.com"
      fill_in :password, with: "Bob"
    end

    click_button 'Sign In'
  end

  it 'provides the option to upload a profile photo' do 
    find('#profile-photo').click

    within 'div#profile-photo-modal' do 
      attach_file 'profile_photo', '/Users/daviskoh/Desktop/bro.jpg'
      click_button 'Submit'
    end

    expect(User.last.profile_photo).to_not be_nil
  end
end