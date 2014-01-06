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
    click_link 'profile-photo'

    within 'div#upload-profile-photo' do 
      attach_file 'profile_photo', '/Desktop/bro.jpg'
      click_button 'Submit'
    end

    expect(User.find(2)).to have(1).profile_photos
  end
end