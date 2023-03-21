import { Typography } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../models/ManufacturerModel";

export default function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    getAll().then((manufacturers) => setManufacturers(manufacturers));
  }, []);

  let newManufacturers = JSON.stringify(manufacturers.data);

  if (newManufacturers) {
    newManufacturers = JSON.parse(newManufacturers);
  }

  return (
    <ul>
      {newManufacturers &&
        newManufacturers.map((manufacturer) => {
          console.log(manufacturer);
          return (
            <li key={`manufacturerId_${manufacturer.id}`}>
              <Link
                to={`/products/manufacturer/${manufacturer.id}`}
                className={"Home__manufacturer-link"}
              >
                <Typography variant="string" component="p">
                  {manufacturer.name}&nbsp;
                </Typography>

                <img
                  height={"100%"}
                  src={manufacturer.logoUrl}
                  alt="Manufacturer logo"
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
