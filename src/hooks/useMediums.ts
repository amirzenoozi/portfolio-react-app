import { useEffect, useState } from 'react'
import { getLatestMediums } from '@/modules/api'
import { MediumCard } from '@/pages/home/components/medium/type';

const useSingleQuestion = () => {
	const [items, setItems] = useState<MediumCard[]>([])
	const [fetching, setFetching] = useState<boolean>(true)
	const [error, setError] = useState<any>(undefined)

	// Get questions from API
	useEffect(() => {
		setFetching(true)
		const items: MediumCard[] = [];
		getLatestMediums().then((res: any) => {
			if (res && res.length > 0) {
				res.forEach((item: any) => {
					const parser = new DOMParser();
					const content = (item.description) ? item.description : item.content;
					const virtualDOM = parser.parseFromString(content, 'text/html');
					const description = (item.description) ? virtualDOM.getElementsByClassName('medium-feed-snippet')[0] : virtualDOM.querySelector('p');

					items.push({
						link: item.link,
						title: item.title,
						image: virtualDOM.images[0].src,
						description: description?.textContent || '-',
					});
				});
				setItems(items)
			} else {
				setItems([])
			}
		}).catch((e) => {
			setError(e)
		}).finally(() => {
			setFetching(false)
		})
	}, [])

	return { items, fetching, error }
}

export default useSingleQuestion
