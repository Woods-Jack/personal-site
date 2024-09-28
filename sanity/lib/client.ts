import { createClient } from '@sanity/client'

export const client = createClient({
  apiVersion: '2024-08-16',
  dataset: 'production',
  projectId: 'el8q0e4x',
  useCdn: true,
})
