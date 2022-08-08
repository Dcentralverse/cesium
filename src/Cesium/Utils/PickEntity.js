const PickEntity = (viewer, movement) => {
  const entities = viewer.current.cesiumElement.entities;
  const picking = viewer.current.cesiumElement.scene.pick(movement.endPosition);
  if (picking) {
    const pickedEntityId = picking.id.id;
    const pickedEntity = entities.getById(pickedEntityId);

    return pickedEntity;
  }
};
export default PickEntity;
