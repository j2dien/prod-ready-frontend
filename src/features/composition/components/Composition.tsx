import { Divider } from "../../../components/Divider";
import { FeatureContainer } from "../../../components/FeatureContainer";
import { Tag } from "../../../components/Tag";

export function Composition() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <FeatureContainer title="Composition">
        <p className="text-gray-800">This is the Composition feature.</p>
        <Divider />
        <div className="flex gap-2">
          <Tag text="React" />
          <Tag text="Vite" />
          <Tag text="Tailwind CSS" />
        </div>
      </FeatureContainer>

      <FeatureContainer title="Composition 2">
        <p className="text-gray-800">This is the Composition feature 2.</p>
        <Divider />
        <div className="flex gap-2">
          <Tag text="Js" />
          <Tag text="TypeScript" />
          <Tag text="Tanstack" />
        </div>
      </FeatureContainer>
    </div>
  );
}
