
interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-6 py-2 rounded-full">
      {text}
    </span>
  );
}
