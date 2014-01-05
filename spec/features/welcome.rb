require 'spec_helper'

describe 'a user can choose between signup & login', js: true do 
  it 'welcomes the user' do 
    visit '/'

    within 'div.container1' do 
      expect(page).to have_content 'Welcome to Swagu.ru'
    end
  end

  it 'allows Sign Up' do 
    visit '/'

    within 'div.container1' do 
      click_link 'Sign Up'
    end

    within 'div.container1' do 
      expect(page).to have_content 'Create a New Account'
    end

    within 'form.new-user' do 
      ['name', 'email', 'password', 'password_confirmation'].each do |field|
        expect(page).to have_field field
      end

      expect(page).to have_select 'gender'

      expect(page).to have_button 'Sign Up'
    end
  end

  it 'allows for Sign In' do 
    visit '/'

    within 'div.container1' do 
      click_link 'Sign In'
    end

    within 'div.container1' do 
      expect(page).to have_content 'Sign In'
    end

    within 'form.sign-in' do 
      ['email', 'password'].each do |field|
        expect(page).to have_field field
      end

      expect(page).to have_button 'Sign In'
    end
  end
end