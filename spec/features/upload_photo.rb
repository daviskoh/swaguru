require 'spec_helper'

describe 'upload photo button', js: true do 
  before :each do 
    user_login
  end

  it 'provides a popup to upload a new photo' do 
    find('#upload-photo').click

    within 'div#upload-photo-modal' do 
      attach_file 'photo', '/Users/daviskoh/Desktop/bro.jpg'
      click_button 'Submit'
    end

    expect(User.last).to have(1).photos
  end
end