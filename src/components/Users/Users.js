import React from "react";
import Loading from "../Loading/Loading";
import "./Users.css";

export default function Users({ query, users }) {
  const filterArray = users.filter(
    (user) =>
      user.name.title.includes(query) ||
      user.name.first.includes(query) ||
      user.name.last.includes(query) ||
      user.email.includes(query) ||
      user.location.country.includes(query)
  );

  return (
    <div className="main">
      <div className="cards">
        {users.length > 0 ? (
          filterArray.map((user, index) => (
            <div key={index} className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={user.picture.large} alt="" />
                </div>
                <div className="card_content">
                  <div className="title">
                    <strong>
                      {user.name.title} {user.name.first} {user.name.last}
                    </strong>
                    <strong className="nat">{user.nat}</strong>
                  </div>
                  <strong>{user.email}</strong>
                  <p>
                    {user.location.street.number}, {user.location.street.name},{" "}
                    {user.location.city}, {user.location.country},{" "}
                    {user.location.postcode}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
        {filterArray.length === 0 && (
          <p
            style={{
              textAlign: "center",
              minWidth: "100vw",
              fontWeight: "bold",
            }}
          >
            No Data found
          </p>
        )}
      </div>
    </div>
  );
}
