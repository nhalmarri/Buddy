import pets from "@/data/pets";

import PetsContainer from "./components/PetsContainer";

async function PostsPage() {

const response = await fetch('https://pets-react-query-backend.eapi.joincoded.com/pets');

const pets = await response.json();



  return (
    <PetsContainer pets={pets} />
  );
};

export default PostsPage;