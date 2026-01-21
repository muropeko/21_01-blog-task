import styles from "./Suggestions.module.css";

interface SuggestionsProps {
  suggestions: string[];
  onSelect: (value: string) => void;
}

export const Suggestions = ({ suggestions, onSelect }: SuggestionsProps) => {
    return (
        <div className={styles.suggestionsWrapper}>
            {suggestions.map(suggestion => (
                <div
                    key={suggestion}
                    className={styles.suggestionItem}
                    onMouseDown={() => onSelect(suggestion)}
                    >
                    {suggestion}
                </div>
            ))}
        </div>
    );
};
