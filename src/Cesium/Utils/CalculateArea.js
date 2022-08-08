import * as turf from "@turf/turf";
import { Cartographic, Math } from "cesium";

const CalculateArea = (positions) => {
  if (positions.length > 2) {
    const fromDegrees = positions?.map((position) => {
      const cartographic = Cartographic.fromCartesian(position);
      return [
        Math.toDegrees(cartographic.longitude),
        Math.toDegrees(cartographic.latitude),
      ];
    });
    const center = centerOfPolygon(fromDegrees);
    fromDegrees.push(fromDegrees[0]);
    const polygon = turf.polygon([fromDegrees]);
    const area = turf.area(polygon);
    const areaKm = area / 1000;
    return { center, area, areaKm };
  }
  return null;
};

export const centerOfPolygon = (fromDegrees) => {
  // center of polygon
  const features = turf.points(fromDegrees);
  const center = turf.center(features);
  return center;
};

export default CalculateArea;
