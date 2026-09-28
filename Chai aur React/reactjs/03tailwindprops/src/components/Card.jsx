import React from "react";
import Container from "../reusableFunction.jsx";

// it is a reusable card component which we can use anywhere in our app and we can pass different props to it to get different content in the card.

// function Card() {
//   return (
//     <>
//       <div className="flex flex-wrap gap-6 justify-center p-8">
//         <Container
//           title="The Cats"
//           description="Cats are small, carnivorous mammals that are often kept as pets."
//           image={
//             <img
//               src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
//               alt="The Cats"
//               className="z-0 h-full w-full rounded-md object-cover"
//             />
//           }
//         />

//         <Container
//           title="The Birds"
//           description="Birds are a group of warm-blooded vertebrates characterized by the presence of feathers."
//           image={
//             <img
//               src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
//               alt="The Birds"
//               className="z-0 h-full w-full rounded-md object-cover"
//             />
//           }
//         />

//         <Container
//           title="The Fishes"
//           description="Fishes are a group of aquatic animals that have gills and fins."
//           image={
//             <img
//               src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//               alt="The Fishes"
//               className="z-0 h-full w-full rounded-md object-cover"
//             />
//           }
//         />
//       </div>
//     </>
//   );
// }

// export default Card;


function Card() {

const animals = [
  { id: 1, title: "The Cats", description: "Cats are small, carnivorous mammals that are often kept as pets.", src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80" },
  { id: 2, title: "The Birds", description: "Birds are warm-blooded vertebrates characterized by the presence of feathers.", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  { id: 3, title: "The Fishes", description: "Fishes are aquatic animals that breathe through gills and use fins to swim.", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
];

  return (
   <>
   <div className="flex flex-col items-center justify-center p-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-6 justify-center items-stretch w-full">
        {animals.map((animal) => (
          <Container
            key={animal.id}
            title={animal.title}
            description={animal.description}
            image={
              <img
                src={animal.src}
                alt={animal.title}
                className="w-full h-50 object-cover"
              />
            }
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Card;