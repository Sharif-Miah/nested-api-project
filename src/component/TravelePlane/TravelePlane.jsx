import { useState } from "react";
import { initialTravelPlan } from "../../api/api-normalize";
import PlaneTree from "../PlaneTree/PlaneTree";

const TravelePlane = () => {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];
  const childs = root.childIds;

  const handleSubmit = (parentId, childId) => {
    // console.log(childId);

    const parent = plan[parentId];
    console.log(parent);

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <div>
      <h3>Places to visit</h3>
      <ol>
        {childs.map((id) => (
          <PlaneTree
            key={id}
            id={id}
            parentId={0}
            planById={plan}
            onComplete={handleSubmit}
          />
        ))}
      </ol>
    </div>
  );
};

export default TravelePlane;

// import { useState } from "react";
// import { initialTravelPlan } from "../../api/api-normalize.js";
// import PlaneTree from "../PlaneTree/PlaneTree.jsx";

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);

//   function handleComplete(parentId, childId) {
//     const parent = plan[parentId];
//
// const nextParent = {
//   ...parent,
//   childIds: parent.childIds.filter((id) => id !== childId),
//     };
//     // Update the root state object...
// setPlan({
//   ...plan,
//   // ...so that it has the updated parent.
//   [parentId]: nextParent,
// });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map((id) => (
//           <PlaneTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }
