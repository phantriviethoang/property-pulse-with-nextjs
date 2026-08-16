'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const SearchResultsPage = () => {
    const searchParams = useSearchParams();

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');

    useEffect(() => {
        const fetchSearchResult = async () => {
            try {
                const res = await fetch(
                    `/api/properties?location=${location}&propertyType=${propertyType}`,
                );
                if (res.status === 200) {
                    const data = await res.json();
                    setProperties(data);
                } else {
                    setProperties([]);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResult();
    }, [location, propertyType]);

    return <div>SearchResultsPage</div>;
};

export default SearchResultsPage;
