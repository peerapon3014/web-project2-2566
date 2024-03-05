import React from "react";
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";

export default function App() {
    return (
        <>
            <div className="mr-5 ">
                <Autocomplete
                    className="max-w-xs  "
                    label="ระดับการศึกษา"
                >
                    <AutocompleteItem
                        key="argentina"
                        
                    >
                        ปริญญาตรี
                    </AutocompleteItem>

                    <AutocompleteItem
                        key="venezuela"
                        
                    >
                       ปริญญาโท
                    </AutocompleteItem>
                   
                </Autocomplete>

            </div>
            <div >
                <Autocomplete
                    className="max-w-xs "
                    label="ภาคการศึกษา"
                >
                    <AutocompleteItem
                        key="argentina"
                       
                    >
                        ภาคต้น
                    </AutocompleteItem>
                    <AutocompleteItem
                        key="venezuela"
                       
                    >
                        ภาคปลาย
                    </AutocompleteItem>
                   
                    
                </Autocomplete>

            </div>
        </>



    );
}
