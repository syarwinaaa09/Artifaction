import { type SchemaTypeDefinition } from 'sanity'

import collection from './schemas/collection'
import creator from './schemas/creator'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [collection, creator],
}
