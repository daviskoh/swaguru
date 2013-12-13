# require 'spec_helper'

# describe 'a user is given the option to signup or login', js: true do
#   it 'allows users to choose between signup or login' do 
#     visit '/'

#     page.html.should include("<h1>Swagu.ru</h1>")
#     [1,2].each { |n| page.html.should include("<div class='container#{n}'></div>") }

#     within 'div.container1' do 
#       click_button 'Sign Up'
#     end

#     within 'div.container1' do 
#       expect(page.html).to have_content 'Sign Up'
#     end
#   end
# end