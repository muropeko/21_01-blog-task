import { useState } from "react";

export const useSearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleChange = (value: string) => {
        setSearchTerm(value);

        if (!showSuggestions) {
            setShowSuggestions(true);
        }
    };

    const handleFocus = () => setShowSuggestions(true);

    const handleBlur = () => setTimeout(() => setShowSuggestions(false), 100);

    const selectSuggestion = (value: string) => {
        setSearchTerm(value);
        setShowSuggestions(false);
        alert(value)
    };

    const submit = () => {
        if (!searchTerm.trim()) return;
        setSearchTerm(searchTerm);
        alert(searchTerm)
    };

    const clear = () => setSearchTerm("");

    return {
        searchTerm,
        handleChange,
        showSuggestions,
        handleFocus,
        handleBlur,
        selectSuggestion,
        submit,
        clear,
    };
};
