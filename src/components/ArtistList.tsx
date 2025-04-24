import { User } from "my-types";
import { Link } from "react-router-dom";

interface Props {
  users: Array<User>;
}

export default function ArtistList({ users }: Props) {
  return (
    <>
      <div className="row p-3 m-1 d-flex">
      {users.map((user, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4 mt-2 mb-4">
          <div className="card text-center h-100">
          <img className="card-img-top"
                src={user.profilePic}
                alt={user.name}
                style={{ width: "200px", height: "200px" }}
              />
            <div className="card-body d-flex flex-column align-items-center">
              <Link to={`productByAuthor/${user.id}`} className="link">
              <h4 className="card-title my-2">
                {user.name}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}