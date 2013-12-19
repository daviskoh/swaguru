class Photo < ActiveRecord::Base
  has_attached_file :image
  
  def image_url
    image.url
  end  
end