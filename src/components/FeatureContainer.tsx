import type { ReactNode } from "react";

interface FeatureContainerProps {
  title: string;
  children: ReactNode;
}

export function FeatureContainer({ title, children }: FeatureContainerProps) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ">
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
