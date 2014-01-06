require 'spec_helper'

describe 'a user can upload a profile photo', js: true do 
  before :each do 
    user_login
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