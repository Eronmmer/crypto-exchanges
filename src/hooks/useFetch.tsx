import { useEffect, useState } from 'react';

export const useFetch = (input: RequestInfo, init?: RequestInit | undefined) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<any>(null);
	const [status, setStatus] = useState<null | number>(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				let response = await fetch(input, init);
				setStatus(response.status);
				let data = await response.json();
				setData(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [init, input]);

	return {
		loading,
		data,
		status,
		error,
	};
};
