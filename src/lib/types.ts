export type User = {
	name: string,
	height: string,
	mass: string,
	hair_color: string,
	skin_color: string,
	eye_color: string,
	birth_year: string,
	gender: string,
	homeworld: string,
	films: string[],
	species: string[],
	vehicles: string[],
	starships: string[],
	created: string,
	edited: string,
	url: string
}

export type UserResponse = { 
	count: number, 
	next: string | null, 
	previous: string | null, 
	results: User[] 
}

export type ResultDetails = {
	count: number,
	next: string | null,
	previous: string | null,
	allUsers: User[]
}
