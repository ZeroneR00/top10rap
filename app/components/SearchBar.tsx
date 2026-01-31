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
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 transition-all duration-300"
      />
    )
}