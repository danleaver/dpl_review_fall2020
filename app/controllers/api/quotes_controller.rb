class Api::QuotesController < ApplicationController
  before_action :set_instrument, only: [:index ]

  def index
    render json: @instrument.quotes
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
  
  private

  def set_instrument
    @instrument = Instrument.find(params[:instrument_id])
  end
end
