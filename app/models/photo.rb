class Photo < ActiveRecord::Base
  has_attached_file :image #TODO use S3 instead of storing photos directly
  
  def image_url
    image.url
  end  
end