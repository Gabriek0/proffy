interface ClassCardFooterPriceProps {
  price: string;
}

export function ClassCardFooterPrice({ price }: ClassCardFooterPriceProps) {
  return (
    <div>
      <span className="text-gray-40 pr-2">Preço/hora</span>
      <span className="text-purple-300 font-bold">{price}</span>
    </div>
  );
}
