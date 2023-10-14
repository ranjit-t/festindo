export default function EventPara({
  head,
  content,
  css,
  onClick,
}: {
  head: string;
  content?: any;
  css?: string;
  onClick?: () => void;
}) {
  return (
    <div className={css}>
      <p>
        <strong className="font-bold text-lg">{head} : </strong>
        <span onClick={onClick}>{content}</span>
      </p>
    </div>
  );
}
