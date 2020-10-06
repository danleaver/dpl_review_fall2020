require 'test_helper'

class Api::InstrumentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_instruments_index_url
    assert_response :success
  end

  test "should get show" do
    get api_instruments_show_url
    assert_response :success
  end

  test "should get create" do
    get api_instruments_create_url
    assert_response :success
  end

  test "should get update" do
    get api_instruments_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_instruments_destroy_url
    assert_response :success
  end

end
