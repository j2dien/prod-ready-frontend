import { Divider } from "../../../components/Divider";
import { FeatureContainer } from "../../../components/FeatureContainer";
import { Tag } from "../../../components/Tag";

export function Composition() {
  return (
    <FeatureContainer title="Composition">
      <p className="text-gray-800">This is the Composition feature.</p>
      <Divider />
      <div className="flex gap-2">
        <Tag text="React" />
        <Tag text="Vite" />
        <Tag text="Tailwind CSS" />
      </div>
    </FeatureContainer>
  );
}
