# app/helpers/application_helper.rb
module ApplicationHelper
  def asset_exists?(asset)
    return false if asset.blank?

    if Rails.application.assets
      # Desarrollo
      Rails.application.assets.find_asset(asset).present?
    else
      # Producción
      Rails.application.assets_manifest.assets[asset].present?
    end
  rescue Sprockets::Rails::Helper::AssetNotPrecompiledError
    false
  end
end
