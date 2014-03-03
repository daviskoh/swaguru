module LoginSpecHelper
  def user_login
    visit '/session/new'

    within 'form.sign-in' do 
      fill_in :email, with: "bob@bob.com"
      fill_in :password, with: "Bob"
    end

    click_button 'Sign In'
  end
end