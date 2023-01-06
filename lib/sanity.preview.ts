'use client'

import {definePreview} from 'next-sanity/preview'
import {projectId, dataset} from './sanity.client'

function onPublicAccessOnly() {
  throw new Error(`Permet de voir un preview comme si vous etiez connecté`)
}
if (!projectId || !dataset) {
    throw new Error(
            `projectId ou dataset manquant. Verifier votre sanity.json ou .env`
    )
}
export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})