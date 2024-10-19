/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
const PlaneTree = ({ id, parentId, planById, onComplete }) => {
  const place = planById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        confirm
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaneTree
              key={childId}
              id={childId}
              planById={planById}
              parentId={id}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaneTree;
