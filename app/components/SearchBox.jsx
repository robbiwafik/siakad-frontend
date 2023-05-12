import { useState } from "react";

import AppInput from "./AppInput";

export default function SearchBox({ onSearch }) {
    const [ searchValue, setSearchValue ] = useState("");

    const handleChange = (value) => {
        setSearchValue(value);
        onSearch(value);
    }

    return (
        <AppInput 
            onChangeText={handleChange} 
            placeholder={'Cari'} 
            value={searchValue} 
        />
    );
}