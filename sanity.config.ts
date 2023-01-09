import {DefaultDocument, defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import { myTheme } from './theme';
import StudioNavBar from './components/StudioNavBar';
import NewLogo from './components/Logo';
import { getDefaultDocumentNode } from './structure';


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'GaMinth_Blog_Manage',
  title: 'GaMinth Blog Manage',

  projectId,
  dataset,

  plugins: [deskTool(
    {
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
  studio: {
    components:{
      logo: NewLogo,
      navbar : StudioNavBar,
  }
}})
