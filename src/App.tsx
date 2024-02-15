import { useState } from 'react'
import { useUsers } from './hooks/users'

import IconSearch from './components/IconSearch'
import UserCard from './components/UserCard'
import Loading from './components/Loading'
import Error from './components/Error'

const USERS_PER_PAGE = 10;

function App() {
	const [nameFilter, setNameFilter] = useState('')
	const {
		loading,
		error,
		resultsDetails,
		filteredUsers,
		currentPage,
		handlePreviousClick,
		handleNextClick,
		navigateToPage
	} = useUsers({ nameFilter })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameFilter(e.target.value)
	}

	return (
		<div className='w-5/6 mx-auto py-4'>
			<h1 className="text-5xl font-bold">User Profiles</h1>
			<div className='flex items-center gap-2 my-4 p-0 border-[1px] max-w-max rounded-lg text-md drop-shadow-sm'>
				<input
					type='text'
					value={nameFilter}
					onChange={handleChange}
					placeholder='Search users...'
					className='px-2 py-2 w-64 rounded-lg outline-none focus:border-2  '
				/>
				<div className='px-3'>
					<IconSearch />
				</div>
			</div>

			{error && <Error message={error} />}
			{loading && <Loading />}
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{filteredUsers.length > 0 &&
					filteredUsers.map((user, index) => {
						const imageID = Math.round(Math.random() * 200)
						return <UserCard key={index} user={user} imageID={imageID} />
					})}
			</div>

			{!loading && !error && <div className='w-full flex justify-end gap-x-2 my-4 overflow-visible '>
				{resultsDetails.previous && <button
					className="px-4 py-2 border-[1px] border-grey-100 rounded-md font-medium cursor-pointer  hover:bg-slate-100"
					onClick={handlePreviousClick}
				>Previous</button>}

				{Array.from({ length: Math.ceil(resultsDetails.count / USERS_PER_PAGE) }).map((_, index) => {
					return (
						
						<button
							key={index}
							className={`px-4 py-2 border-[1px] border-grey-100 rounded-md font-medium cursor-pointer hover:bg-slate-100 ${currentPage === index + 1 ? 'bg-slate-100' : ''} `}
							onClick={() => navigateToPage(index + 1)}
						>
							{index + 1}
							{/* {Math.abs(index + 1 - currentPage) < 2 || index + 1 === 1 || index + 1 === Math.ceil(resultsDetails.count / USERS_PER_PAGE) ? index + 1 : '...'} */}
						</button>
					)
				})}

				{resultsDetails.next && <button
					className="px-4 py-2 border-[1px] border-grey-100 rounded-md font-medium cursor-pointer hover:bg-slate-100"
					onClick={handleNextClick}
				>Next</button>}
			</div>}
		</div>
	)
}

export default App
