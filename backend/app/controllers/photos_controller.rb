class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render json: @photos
  end

  def show
    @photo = Photo.find(params[:id])
    render json: @photo
  end

  def categories
    categories = Photo.distinct.pluck(:category)
    render json: { categories: categories }
  end

  def by_category
    @photos = Photo.where(category: params[:name])
    render json: @photos
  end
end
