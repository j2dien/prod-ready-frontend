import { StateChallenge } from '@/features/playground/components/StateChallenge';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/state-challenge')({
  component: StateChallenge,
})

