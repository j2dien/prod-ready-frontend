import { EffectPlayground } from "@/features/playground/components/EffectPlayground";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/effect-playground")({
  component: EffectPlayground,
});
