import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit} className={s.searchForm}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
        />
        
        <button className={s.button} type="submit">
          <IoIosSearch size={24} className={s.icon}/>
        </button>
      </form>
    </div>
  );
}
