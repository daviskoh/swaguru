require 'spec_helper'

describe 'upload photo button', js: true do 
  before :each do 
    user_login
    User.last.photos.destroy_all
    binding.pry
  end

  it 'provides a popup to upload a new photo' do 
    find('#upload-new-photo').click

    within 'div#photo-modal' do 
      attach_file 'photo', '/Users/daviskoh/Desktop/bro.jpg'
      click_button 'Upload Photo'
    end

    sleep(5)
    expect(User.last).to have(1).photos
  end
end