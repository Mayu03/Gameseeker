import React, { useEffect, useState } from "react";
import axios from "axios";

function Searchbox() {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="container-fluid" style={{ width: "30%", marginTop: "2%" }}>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />

        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {/* <div>
        {data.map((value, key) => {
          return (
            <button
              type="button"
              class="d-grid  col-6 mx-auto"
              style={{ borderRadius: "1rem" }}
              onClick={(item) => {
                console.log("value", value);
                console.log("on click ", item);
              }}
            >
              {value.Game}
            </button>
          );
        })}
      </div> */}

      {/* Game: "Grand Theft Auto V"
Genre: "Action"
Global: 19.39
Publisher: "Rockstar Games"
Year: 2014
_id: "61e8020e24736050c6484b6f */}
      <div>
        {currentItem && Object.keys(currentItem).length > 0 ? (
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Game:{currentItem.Game}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <img src="..." class="card-img-top" alt="..." />
                  <div>Genre:{currentItem.Genre}</div>
                  <div>Publisher:{currentItem.Publisher}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {data.map((value, key) => {
              return (
                <div
                  style={{ borderRadius: "1rem" }}
                  onClick={(item) => {
                    console.log("value", value);
                    // console.log("on click ", item);
                    setCurrentItem(value);
                  }}
                >
                  {value.Game}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbox;
