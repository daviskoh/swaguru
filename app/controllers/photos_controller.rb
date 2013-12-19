class PhotosController < ApplicationController
  before_action :set_photo

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      binding.pry
      render json: @photo, status: 200
    else
      binding.pry
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:image, :image_file_name, :image_content_type, :image_file_size, :image_updated_at)
  end

  def set_photo
    binding.pry
    @photo = Photo.find(params[:id])
  end
end