interface searchBarProps {
    value: string,
    onChange: (text: string) => void
}

export default function SearchBar({value, onChange}: searchBarProps ) {
    return (
        <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Поиск рэпера"
      />
    )
}