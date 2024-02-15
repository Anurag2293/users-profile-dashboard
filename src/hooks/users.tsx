import { useState, useEffect } from "react"
import axios from "axios"

import type { User, UserResponse, ResultDetails } from "../lib/types"

export const useUsers = ({ nameFilter }: { nameFilter: string}) => {
    const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)
	const [resultsDetails, setResultsDetails] = useState<ResultDetails>({ 
		count: 0, next: null, previous: null, allUsers: []
	})
	const [currentPage, setCurrentPage] = useState<number>(1)
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])

	useEffect(() => {
		const fetchUsers = async (page: number) => {
			try {
				setResultsDetails({...resultsDetails, allUsers: []})
				setLoading(true);
				const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
				const { count, next, previous, results }: UserResponse = response.data;
				setResultsDetails({ count, next, previous, allUsers: results});
			} catch (error: any) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchUsers(currentPage);
	}, [currentPage])

    useEffect(() => {
        const filterUsers = () => {
            const filterResult = resultsDetails.allUsers.filter(user => user.name.toLowerCase().includes(nameFilter.toLowerCase()))
            setFilteredUsers(filterResult);
        }
        filterUsers()
    }, [nameFilter, resultsDetails.allUsers]);

	const handlePreviousClick = () => {
		setCurrentPage(currentPage - 1);
	}

	const handleNextClick = () => {
		setCurrentPage(currentPage + 1);
	}

	const navigateToPage = (page: number) => {
		setCurrentPage(page);
	}

    return { loading, error, resultsDetails, currentPage, filteredUsers, handlePreviousClick, handleNextClick, navigateToPage }
}