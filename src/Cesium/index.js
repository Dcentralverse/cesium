import { ScreenSpaceEventType } from "cesium";
import { useRef } from "react";
import {
  Globe,
  Scene,
  ScreenSpaceEvent,
  ScreenSpaceEventHandler,
  Viewer,
} from "resium";
import Toolbox from "../Components/Toolbox";
import { useDrawContext } from "../Contexts/DrawContext";
import CalculateArea from "./Utils/CalculateArea";
import PickEntity from "./Utils/PickEntity";
import useDraw from "./Utils/useDraw";

function CesiumPage() {
  const viewer = useRef(null);

  const { pickPosition, transformPickedPosition, terminateShape } =
    useDraw(viewer);

  const { drawingMode } = useDrawContext();

  return (
    <div id='resium-container'>
      <Viewer
        ref={viewer}
        resolutionScale={window.devicePixelRatio > 1 ? 2 : 1}
        navigationHelpButton={false}
        animation={false}
        shouldAnimate={true}
        timeline={false}
        skyBox={false}
        targetFrameRate={60} // fps
        sceneModePicker={false}
        fullscreenElement={"resium-container"}
        // geocoder={false}
        style={{
          position: "relative",
        }}
        baseLayerPicker={false}
        full
      >
        <Scene />
        <Globe />
        <ScreenSpaceEventHandler>
          <ScreenSpaceEvent
            type={ScreenSpaceEventType.MOUSE_MOVE}
            action={(event) => {
              drawingMode && pickPosition(event);
            }}
          />
          <ScreenSpaceEvent
            type={ScreenSpaceEventType.LEFT_CLICK}
            action={(event) => {
              drawingMode && transformPickedPosition(event.position);
            }}
          />
          <ScreenSpaceEvent
            type={ScreenSpaceEventType.RIGHT_CLICK}
            action={() => {
              drawingMode && terminateShape();
            }}
          />
        </ScreenSpaceEventHandler>
        <Toolbox />
      </Viewer>
    </div>
  );
}

export default CesiumPage;
