import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './sanity/schemaTypes'
import {codeInput} from '@sanity/code-input'
import {table} from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'ferhataslan',

  projectId: '2qjmc5jd',
  dataset: 'production',

  plugins: [structureTool(), codeInput(), table()],

  schema: {
    types: schemaTypes,
  },
})
