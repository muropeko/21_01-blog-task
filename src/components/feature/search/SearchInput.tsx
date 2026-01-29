import { X, Search } from "lucide-react";
import { Input, Button } from "../../ui";
import { Suggestions } from "./Suggestions";
import styles from "./SearchInput.module.css";
import { usePosts } from "../../../hooks/queries/usePosts";
import type { useSearchInput } from "../../../hooks/useSearchInput";

interface SearchInputProps {
  search: ReturnType<typeof useSearchInput>
}

export const SearchInput = ({ search }: SearchInputProps) => {
  const {
    inputValue,
    debouncedInputValue,
    handleChange,
    handleFocus,
    handleBlur,
    selectSuggestion,
    clear,
    submit,
    showSuggestions,
  } = search

  const { posts: suggestionPosts, isLoading: isLoadingSuggestions } = usePosts({ searchTerm: debouncedInputValue });

  const suggestions = suggestionPosts?.map((p) => p.title) ?? [];

  return (
    <div className={styles.searchBlock}>
      <div className={styles.searchWrapper}>
        <Input
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search posts..."
        />
        <Button onClick={clear} variant="clear">
          <X />
        </Button>
        <Button onClick={submit} variant="default">
          <Search />
        </Button>
      </div>

        {showSuggestions && debouncedInputValue &&
            suggestions.length > 0 && !isLoadingSuggestions && (
            <Suggestions suggestions={suggestions} onSelect={selectSuggestion} />
            )
        }
    </div>
  );
};
