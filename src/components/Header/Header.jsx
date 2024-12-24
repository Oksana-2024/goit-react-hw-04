import s from "./Header.module.css";

export default function Header() {
  return (
    <div className={s.containerHeader}>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

