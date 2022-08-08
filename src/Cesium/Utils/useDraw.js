import {
  CallbackProperty,
  Cartesian2,
  Cartesian3,
  Color,
  ColorMaterialProperty,
  defined,
  HeightReference,
  HorizontalOrigin,
  LabelStyle,
  PolygonHierarchy,
  VerticalOrigin,
} from "cesium";
import { useDrawContext } from "../../Contexts/DrawContext";
import CalculateArea from "../Utils/CalculateArea";

const useDraw = (viewer) => {
  const {
    activeShape,
    setActiveShape,
    activeShapePoints,
    setActiveShapePoints,
    floatingPoint,
    setFloatingPoint,
    drawingMode,
    setDrawingMode,
  } = useDrawContext();

  function createPoint(worldPosition) {
    const point = viewer.current.cesiumElement.entities?.add({
      position: worldPosition,
      point: {
        color: Color.WHITE,
        pixelSize: 5,
        heightReference: HeightReference.CLAMP_TO_GROUND,
        outlineColor: Color.BLACK,
        outlineWidth: 1,
      },
    });
    if (drawingMode === "point") {
      setActiveShapePoints([]);
    }
    return point;
  }

  function drawShape(positionData) {
    let shape;
    if (drawingMode === "line") {
      shape = viewer.current.cesiumElement.entities?.add({
        polyline: {
          positions: positionData,
          clampToGround: true,
          width: 3,
        },
      });
    } else if (drawingMode === "polygon") {
      const data = CalculateArea(positionData) || {};
      shape = viewer.current.cesiumElement.entities?.add({
        position: Cartesian3.fromDegrees(
          data?.center?.geometry?.coordinates[0] || 0,
          data?.center?.geometry?.coordinates[1] || 0
        ),
        label: {
          text: `${data.area?.toFixed(2)} m²`,
          font: "14px sans-serif",
          style: LabelStyle.FILL_AND_OUTLINE,
          fillColor: Color.WHITE,
          outlineColor: Color.WHITE,
          outlineWidth: 2,
          horizontalOrigin: HorizontalOrigin.CENTER,
          verticalOrigin: VerticalOrigin.BOTTOM,
          pixelOffset: new Cartesian2(0, -10),
        },
        polygon: {
          hierarchy: positionData,
          material: new ColorMaterialProperty(Color.BLACK.withAlpha(0.2)),
          heightReference: HeightReference.CLAMP_TO_GROUND,
          border: true,
        },
      });
    }
    return shape;
  }

  const transformPickedPosition = (position) => {
    const earthPosition = viewer?.current?.cesiumElement.camera.pickEllipsoid(
      position,
      viewer?.current?.cesiumElement.scene.globe.ellipsoid
    );
    if (defined(earthPosition)) {
      const _activeShapePoints = activeShapePoints;
      if (_activeShapePoints.length === 0) {
        drawingMode !== "point" && setFloatingPoint(createPoint(earthPosition));
        _activeShapePoints.push(earthPosition);
        setActiveShapePoints(_activeShapePoints);
        const dynamicPositions = new CallbackProperty(function () {
          if (drawingMode === "polygon") {
            return new PolygonHierarchy(activeShapePoints);
          }
          return activeShapePoints;
        }, false);
        drawShape(dynamicPositions);
      }
      _activeShapePoints.push(earthPosition);
      setActiveShapePoints(_activeShapePoints);
      createPoint(earthPosition);
    }
  };

  const pickPosition = (e) => {
    // harita üzerinden nokta seçmemizi sağlar
    if (defined(floatingPoint)) {
      const _activeShapePoints = activeShapePoints;
      const newPosition = viewer.current.cesiumElement.camera.pickEllipsoid(
        e.endPosition,
        viewer.current.cesiumElement.scene.globe.ellipsoid
      );
      if (defined(newPosition)) {
        const _floatingPoint = floatingPoint;
        _floatingPoint.position.setValue(newPosition);
        _activeShapePoints.pop();
        _activeShapePoints.push(newPosition);
        setActiveShapePoints(_activeShapePoints);
      }
    }
  };

  // Redraw the shape so it's not dynamic and remove the dynamic shape.
  function terminateShape() {
    if (activeShapePoints.length > 3 || drawingMode !== "polygon") {
      const _activeShapePoints = activeShapePoints;
      _activeShapePoints.pop();
      setActiveShapePoints(_activeShapePoints);
      viewer.current.cesiumElement.entities?.remove(floatingPoint);
      viewer.current.cesiumElement.entities?.remove(activeShape);
      drawShape(activeShapePoints);
      setFloatingPoint(null);
      setActiveShape(null);
      setActiveShapePoints([]);
      setDrawingMode(null);
    }
  }

  return {
    pickPosition,
    transformPickedPosition,
    terminateShape,
  };
};

export default useDraw;
