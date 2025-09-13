interface Props {
  view: "grid" | "list";
  setView: (v: "grid" | "list") => void;
}

export default function ToggleView({ view, setView }: Props) {
  return (
    <div className="mb-4 flex gap-2">
      <button
        onClick={() => setView("grid")}
        className={`p-2 border rounded ${view === "grid" ? "bg-gray-300" : ""}`}
      >
        Grid
      </button>
      <button
        onClick={() => setView("list")}
        className={`p-2 border rounded ${view === "list" ? "bg-gray-300" : ""}`}
      >
        Lista
      </button>
    </div>
  );
}
