import { useState } from "react";
import { useDebounce } from "./useDebounce";

export const useSearchInput = () => {
  const [inputValue, setInputValue] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const debouncedInputValue = useDebounce(inputValue)

  const handleChange = (value: string) => {
    setInputValue(value)
    if (!showSuggestions) setShowSuggestions(true)
  };

  const handleFocus = () => setShowSuggestions(true)
  const handleBlur = () => setTimeout(() => setShowSuggestions(false), 100)

  const selectSuggestion = (value: string) => {
    setSearchTerm(value)
    setInputValue(value)
    setShowSuggestions(false)
  };

  const submit = () => {
    if (!inputValue.trim()) return
    setSearchTerm(inputValue)
  };

  const clear = () => {
    setInputValue("")
    setSearchTerm("")
  };

  return {
    inputValue,
    debouncedInputValue,
    searchTerm,
    showSuggestions,
    handleChange,
    handleFocus,
    handleBlur,
    selectSuggestion,
    submit,
    clear,
  };
};
