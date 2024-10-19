// src/services/mapboxService.js

const MAPBOX_BASE_URL = "https://api.mapbox.com/styles/v1/mapbox";
const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

/**
 * Generate Mapbox static map URL
 * @param {string} style - Map style (e.g., 'dark-v11', 'light-v10')
 * @param {Array<number>} coordinates - [long1, lat1, long2, lat2]
 * @param {string} size - Size of the image in 'widthxheight' format
 * @returns {string} - Complete URL for the static map
 */
export const getMapboxStaticImageUrl = (style = 'outdoors-v12', coordinates = [-9.2316,38.5672,-9.0379,38.809], size = '400x550') => {
  return `${MAPBOX_BASE_URL}/${style}/static/[${coordinates.join(',')}]/${size}?access_token=${MAPBOX_ACCESS_TOKEN}`;
};
