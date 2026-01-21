import styles from "./SearchInput.module.css";
import { Button, Input } from "../../ui";
import { Suggestions } from "./Suggestions";
import { useSearchInput } from "../../../hooks/useSearchInput";
import type { IPost } from "../../../shared/types/post.interface";
import { Search, X } from "lucide-react";

interface SearchInputProps {
    posts: IPost[];
}

export const SearchInput = ({ posts }: SearchInputProps) => {
    const {
        searchTerm,
        handleChange,
        showSuggestions,
        handleFocus,
        handleBlur,
        selectSuggestion,
        clear,
        submit
    } = useSearchInput();

    const suggestions = posts
        .map(post => post.title)
        .filter(title => title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className={styles.searchBlock}>
            <div className={styles.searchWrapper}>
                <Input
                    value={searchTerm}
                    onChange={e => handleChange(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={e => e.key === 'Enter' && submit()}
                    placeholder="Search posts..."
                />
                <Button onClick={clear} variant="clear">
                    <X />
                </Button>
                <Button onClick={submit} variant="default">
                    <Search />
                </Button>
            </div>

            {showSuggestions && searchTerm !== '' && suggestions.length > 0 && (
                <Suggestions
                    suggestions={suggestions}
                    onSelect={selectSuggestion}
                />
            )}
        </div>
    );
};
