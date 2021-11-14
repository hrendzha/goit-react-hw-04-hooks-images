import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

function Searchbar({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = e => setSearchQuery(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(searchQuery);
    };

    return (
        <header className={s.searchBar}>
            <form className={s.searchForm} onSubmit={handleSubmit}>
                <button type="submit" className={s.btn}>
                    <span className={s.btnLabel}>Search</span>
                </button>

                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    required
                    placeholder="Search images and photos"
                    value={searchQuery}
                    onChange={handleChange}
                />
            </form>
        </header>
    );
}

export default Searchbar;
