import { createFileRoute } from '@tanstack/react-router'
import { Composition } from '../features/composition/components/Composition';

export const Route = createFileRoute('/composition')({
  component: Composition,
})
