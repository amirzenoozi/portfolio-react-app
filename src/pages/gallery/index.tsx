import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/container';
import PhotoAlbum from 'react-photo-album';
import './style.scss';


function Gallery() {
	const Photos = [
		{ src: "https://cdn.dribbble.com/users/1857680/screenshots/16211309/media/97caf3dc47a097157e0dcfdb3f8426f2.png", width: 4, height: 3 },
		{ src: "https://cdn.dribbble.com/users/1857680/screenshots/16211259/media/a081a2313a41371760b62d4d0552a156.png", width: 4, height: 3 },
		{ src: "https://cdn.dribbble.com/users/1857680/screenshots/7894672/media/93cb507fe088656af890bbb47c4a727f.png", width: 4, height: 3 },
	]
	return (
		<>
			<section className={'skill'}>
				<span className={'skill-circle skill-circle--one'} />
				<span className={'skill-circle skill-circle--two'} />
				<Container>
					<PhotoAlbum
						photos={Photos}
						layout={'masonry'}
						spacing={20}
						padding={0}
						columns={4}
					/>
				</Container>
			</section>
		</>
	);
}

export default Gallery;
