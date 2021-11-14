import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import { imagesApi } from './services/imagesApi';
import scrollToNewImages from './js/scrollToNewImages';

function App() {
    const [photos, setPhotos] = useState([]);
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [largeImageUrl, setLargeImageUrl] = useState('');
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (!query) return;
        toggleLoader();

        imagesApi
            .fetchWithQuery(query, page)
            .then(photos => {
                if (page > 1) {
                    setPhotos(prevPhotos => [...prevPhotos, ...photos]);
                    scrollToNewImages();
                    return;
                }
                setPhotos([...photos]);
            })
            .catch(error => console.log(error))
            .finally(() => toggleLoader());
    }, [page, query]);

    const toggleLoader = () => setIsLoaderVisible(bool => !bool);

    const handleFormSubmit = query => {
        setQuery(query);
        setPage(1);
    };

    const handleLoadMoreBtnClick = () => setPage(page => page + 1);

    const handleModalOpen = largeImageUrl => {
        setIsModalOpen(true);
        setLargeImageUrl(largeImageUrl);
    };

    const handleModalClose = () => setIsModalOpen(false);

    return (
        <>
            <Searchbar onSubmit={handleFormSubmit} />

            <ImageGallery photos={photos} onModalOpen={handleModalOpen} />

            {Boolean(photos.length) && !isLoaderVisible && (
                <Button onClick={handleLoadMoreBtnClick} />
            )}
            <Loader
                className="loader"
                visible={isLoaderVisible}
                type="ThreeDots"
                color="#00BFFF"
                height={80}
                width={80}
            />
            {isModalOpen && (
                <Modal
                    largeImageUrl={largeImageUrl}
                    onModalClose={handleModalClose}
                />
            )}
        </>
    );
}

export default App;
