class Api::InstrumentsController < ApplicationController
  def index
    render json: Instrument.all
  end

  def show
    render json: Instrument.find(params[:id])
  end

  def create
  end

  def update
  end

  def destroy
  end
end
