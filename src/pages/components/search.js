import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "../data/cs";

export default function App() {
  return (
    <Autocomplete
      
      placeholder="ค้นหา"
      defaultSelectedKey="cat"
      defaultItems={animals}
      className="max-w-xs"
      scrollShadowProps={{
        isEnabled: false
      }}
    >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
    </Autocomplete>
  );
}
