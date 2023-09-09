interface HeaderPageNameProps {
  pageName: string;
}

export function HeaderPageName({ pageName }: HeaderPageNameProps) {
  return <span className="text-[#D4C2FF]">{pageName}</span>;
}
