import { HappyFaceEmoji } from '../../icons';

export function HeaderContentInfo() {
  return (
    <div className="flex ">
      <div className="p-2">
        <HappyFaceEmoji />
      </div>
      <span className="text-gray-50">
        Nós temos 32 <br />
        professores
      </span>
    </div>
  );
}
