import { Disclosure } from "@headlessui/react";
import React from "react";
import "../Loader/Loader.css"

interface LoadingProps {
  message?: string;
  details?: string;
}

const Loader: React.FC<LoadingProps> = ({
  message = "Loading...",
  details = "Fetching data from the server. Please wait...",
}) => {
  return (
     <div className="loading-container">
      <Disclosure>
        {({ open }) => (
          <div className="loading-card">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="spinner" />
              <span style={{ fontWeight: 500 }}>{message}</span>
            </div>

            <Disclosure.Button className="disclosure-button">
              {open ? "Hide details ▲" : "Show details ▼"}
            </Disclosure.Button>

            <Disclosure.Panel className="disclosure-panel">
              {details}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default Loader;
