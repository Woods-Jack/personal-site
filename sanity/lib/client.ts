import { createClient } from '@sanity/client'

export const client = createClient({
  apiVersion: '2023-12-20',
  dataset: 'production',
  projectId: 'fkxi4obq',
  useCdn: true,
})
