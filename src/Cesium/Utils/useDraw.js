import {
  CallbackProperty,
  Color,
  ColorMaterialProperty,
  defined,
  HeightReference,
  PolygonHierarchy,
} from "cesium";
import { useDrawContext } from "../../Contexts/DrawContext";

const useDraw = (viewer) => {
  const {
    activeShape,
    setActiveShape,
    activeShapePoints,
    setActiveShapePoints,
    floatingPoint,
    setFloatingPoint,
    drawingMode,
  } = useDrawContext();

  function createPoint(worldPosition) {
    const point = viewer.current.cesiumElement.entities?.add({
      position: worldPosition,
      point: {
        color: Color.AZURE,
        pixelSize: 10,
        heightReference: HeightReference.CLAMP_TO_GROUND,
        outlineColor: Color.SLATEBLUE,
        outlineWidth: 3,
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
      shape = viewer.current.cesiumElement.entities?.add({
        polygon: {
          hierarchy: positionData,
          material: new ColorMaterialProperty(Color.WHITE.withAlpha(0.7)),
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
    if (activeShapePoints.length > 3) {
      const _activeShapePoints = activeShapePoints;
      _activeShapePoints.pop();
      setActiveShapePoints(_activeShapePoints);
      viewer.current.cesiumElement.entities?.remove(floatingPoint);
      viewer.current.cesiumElement.entities?.remove(activeShape);
      drawShape(activeShapePoints);
      setFloatingPoint(null);
      setActiveShape(null);
      setActiveShapePoints([]);
    }
  }

  return {
    pickPosition,
    transformPickedPosition,
    terminateShape,
  };
};

export default useDraw;
