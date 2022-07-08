import {InMemoryCache, Reference, makeVar} from '@apollo/client';


// Initializes to an empty array
export const cartItemsVar = makeVar([]);

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				launches: {
					// ...field policy definitions...
					},
			},
		},
	},
});