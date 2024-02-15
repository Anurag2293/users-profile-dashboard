import type { User } from '../lib/types'

const capitalizeWord = (str: string) => {
	return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

export const UserCard = ({ user, imageID }: { user: User; imageID: number }) => {
	return (
		<div className={`flex flex-col gap-4 py-8 px-4 border-[1px] rounded-xl xl:flex-row xl:justify-start xl:py-4 xl:px-2 hover:bg-slate-50 bg-${user.hair_color}-100`}>
			<img
				src={`https://picsum.photos/id/${imageID}/200`}
				alt={imageID.toString()}
				className='rounded-full mx-auto w-48 my-0 p-0'
			/>
			<div className="flex flex-col items-start justify-start mx-auto">
				<h2 className='text-2xl font-bold mx-auto my-2 xl:my-0 xl:mx-0 underline'>{user.name}</h2>
				<div className='flex justify-between gap-8 xl:gap-0 xl:flex-col'>
					<div>
						<p className='text-lg'><span className='font-semibold'>Hair Color:</span> {capitalizeWord(user.hair_color)}</p>
						<p className='text-lg'><span className='font-semibold'>Skin Color:</span> {capitalizeWord(user.skin_color)}</p>
					</div>
					<div>
						<p className='text-lg'><span className='font-semibold'>Gender:</span> {capitalizeWord(user.gender)}</p>
						<p className='text-lg'><span className='font-semibold'>Count of Vehicles:</span> {capitalizeWord(user.vehicles.length.toString())}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserCard;