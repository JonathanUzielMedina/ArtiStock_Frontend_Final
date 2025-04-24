import { User } from "my-types";
import { useState, useEffect } from "react";
import { getAllUsers } from "../api/UserAPI";
import Filter from "../components/Filter";
import ArtistList from "../components/ArtistList";

const ArtistsPage = () => {
  //Filtro
  const [name, setName] = useState<string>("");

  // Estado del componente.
  const [user, setUser] = useState<User[]>([]);

  const filteredUsers = user.filter((u) => {
    return (
      u.name && u.name.toLowerCase().includes(name.toLowerCase())
      //man de manzana
    );
  });

  // Eventos del componente
  useEffect(() => {
    getAllUsers().then((data: any) => setUser(data));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-content-center mt-5 mb-2 py-2">
        <h1 className="text-lg font-medium title">Artistas</h1>
      </div>
      <div>
        <Filter filterby={"name"} name={name} setName={setName} />
        <ArtistList users={filteredUsers} />
        </div>
    </>
  );
};

export default ArtistsPage;
