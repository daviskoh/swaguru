require 'spec_helper'

describe 'a user can choose between signup & login', js: true do 
  it 'allows for signup' do 
    visit '/'

    within 'div.container1' do 
      click_link 'Sign Up'
    end

    within 'div.container1' do 
      ['name', 'email', 'password', 'password_confirmation'].each do |field|
        expect(page).to have_field field
      end

      expect(page).to have_select 'gender'
    end
  end

  it 'allows for login' do 
    visit '/'
  end
end