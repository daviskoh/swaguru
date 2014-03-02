require 'spec_helper'

describe 'user can see all posted photos', js: true do 
  before :each do
    # vist /
    # click browse button
    # no need to login
  end

  it "displays all other users' photos" do
    # should see ul w/ count === Photo.all.count
  end

  it "orders photos from newest to oldest"
end
  